document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("tableArea");
  const army = JSON.parse(localStorage.getItem("army")) || [];
  const saved = JSON.parse(localStorage.getItem("armyLayout")) || {};
  const scale = 2; // 1 mm ≈ 2px

  army.forEach((entry, i) => {
    const unit = units.find(u => u.id === entry.id);
    if (!unit?.base) return;

    const instKey = entry.instanceId ?? `${entry.id}#${i}`;
    const squad = unit.allowedSquads.find(s => s.models === entry.models) || unit.allowedSquads[0];
    const baseSize = unit.base.size ?? unit.base.width
    const modelCount = squad?.models || 1;

    const layout = generateUnitLayout(instKey, modelCount, baseSize, saved);

    layout.forEach(({ key, x, y, r }, idx) => {
      const base = document.createElement("div");
      base.className = `base ${unit.base.shape}`;
      base.dataset.instanceKey = instKey;
      base.dataset.modelIndex = idx;
      base.dataset.key = key;
      base.dataset.rotation = r ?? 0;

      const { width, height } =
        unit.base.shape === "round"
          ? { width: unit.base.size, height: unit.base.size }
          : { width: unit.base.width, height: unit.base.height };

      base.style.width = `${width * scale}px`;
      base.style.height = `${height * scale}px`;
      base.style.left = `${x}px`;
      base.style.top = `${y}px`;
      base.style.transform = `rotate(${base.dataset.rotation}deg)`;

      const img = document.createElement("img");
      img.src = unit.individual || entry.image;
      base.appendChild(img);
      table.appendChild(base);
    });
  });

  enableGroupDrag(table, saveLayout, scale);

  function generateUnitLayout(instKey, count, baseSize, savedPositions) {
    const layout = [];

    const spacing = baseSize * scale; // px between bases (adjust as needed)
    const perRow = 5;
    const startX = 100;
    const startY = 100;

    for (let i = 0; i < count; i++) {
      const key = `${instKey}_${i}`;
      const saved = savedPositions[key];
      if (saved) {
        layout.push({ key, x: saved.x, y: saved.y, r: saved.r || 0 });
        continue;
      }

      const row = Math.floor(i / perRow);
      const col = i % perRow;

      const x = startX + col * spacing;
      const y = startY + row * spacing;

      layout.push({ key, x, y, r: 0 });
    }

    return layout;
  }

  function saveLayout() {
    const layout = {};
    document.querySelectorAll(".base").forEach(base => {
      layout[base.dataset.key] = {
        x: parseFloat(base.style.left),
        y: parseFloat(base.style.top),
        r: parseFloat(base.dataset.rotation || "0")
      };
    });
    localStorage.setItem("armyLayout", JSON.stringify(layout));
  }
});

//Functions

function enableGroupDrag(container, onRelease, scale) {
  const selected = new Set();
  const DRAG_THRESHOLD = 5;
  let selectionBox = null;
  let measure = null;
  let mode = "idle";
  let start = { x: 0, y: 0 };
  let last = { x: 0, y: 0 };
  let dragStartCenter = null;

  const rectOf = el => el.getBoundingClientRect();
  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  const clearSelection = () => {
    selected.forEach(el => el.classList.remove("selected-base"));
    selected.clear();
  };
  const addSelect = el => {
    if (!selected.has(el)) {
      selected.add(el);
      el.classList.add("selected-base");
    }
  };

  container.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    const crect = rectOf(container);
    const cx = e.clientX - crect.left;
    const cy = e.clientY - crect.top;
    start = { x: cx, y: cy };
    last = { x: e.clientX, y: e.clientY };
    const base = e.target.closest(".base");

    if (base) {
      if (e.shiftKey) {
        if (selected.has(base)) {
          selected.delete(base);
          base.classList.remove("selected-base");
        } else addSelect(base);
        mode = "idle";
        e.preventDefault();
        return;
      }

      if (!selected.has(base)) {
        clearSelection();
        addSelect(base);
      }
      mode = "pendingDrag";
      e.preventDefault();
      return;
    }

    if (!e.shiftKey && !e.ctrlKey) clearSelection();
    mode = "marquee";
    selectionBox = document.createElement("div");
    selectionBox.className = "selection-box";
    selectionBox.style.left = `${start.x}px`;
    selectionBox.style.top = `${start.y}px`;
    container.appendChild(selectionBox);
    e.preventDefault();
  });

  window.addEventListener("mousemove", e => {
    if ((e.buttons & 1) === 0 || mode === "idle") return;
    const crect = rectOf(container);

    if (mode === "pendingDrag") {
      const moveX = Math.abs(e.clientX - start.x);
      const moveY = Math.abs(e.clientY - start.y);
      if (moveX > DRAG_THRESHOLD || moveY > DRAG_THRESHOLD) {
        mode = "group";
        last = { x: e.clientX, y: e.clientY };

        const first = [...selected][0];
        const rect = rectOf(first);
        const contRect = rectOf(container);
        dragStartCenter = {
          x: rect.left - contRect.left + rect.width / 2,
          y: rect.top - contRect.top + rect.height / 2
        };
        measure = createMeasureElements(container);
      } else return;
    }

    if (mode === "marquee") {
      const cx = e.clientX - crect.left;
      const cy = e.clientY - crect.top;
      const x = Math.min(cx, start.x);
      const y = Math.min(cy, start.y);
      const w = Math.abs(cx - start.x);
      const h = Math.abs(cy - start.y);
      Object.assign(selectionBox.style, {
        left: `${x}px`,
        top: `${y}px`,
        width: `${w}px`,
        height: `${h}px`
      });

      const box = selectionBox.getBoundingClientRect();
      clearSelection();
      container.querySelectorAll(".base").forEach(el => {
        const r = rectOf(el);
        const overlap = !(r.right < box.left || r.left > box.right || r.bottom < box.top || r.top > box.bottom);
        if (overlap) addSelect(el);
      });
      return;
    }

    if (mode === "group") {
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      selected.forEach(el => {
        const bounds = rectOf(container);
        const newX = parseFloat(el.style.left) + dx;
        const newY = parseFloat(el.style.top) + dy;
        el.style.left = `${clamp(newX, 0, bounds.width - el.offsetWidth)}px`;
        el.style.top = `${clamp(newY, 0, bounds.height - el.offsetHeight)}px`;
      });
      last = { x: e.clientX, y: e.clientY };

      if (measure) {
        const first = [...selected][0];
        const rect = rectOf(first);
        const contRect = rectOf(container);
        const center = {
          x: rect.left - contRect.left + rect.width / 2,
          y: rect.top - contRect.top + rect.height / 2
        };
        updateMeasure(measure, dragStartCenter, center, scale);
      }
    }
  });

  window.addEventListener("mouseup", () => {
    if (selectionBox) selectionBox.remove();
    if ((mode === "group" || mode === "pendingDrag") && onRelease) onRelease();
    if (measure) {
      removeMeasure(measure);
      measure = null;
    }
    mode = "idle";
  });

  document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      clearSelection();
      container.querySelectorAll(".base").forEach(addSelect);
    }
    if (e.key.toLowerCase() === "r" && selected.size > 0) {
      selected.forEach(el => {
        el.dataset.rotation = 0;
        el.style.transform = "rotate(0deg)";
      });
      if (onRelease) onRelease();
    }
  });

  container.addEventListener("wheel", e => {
    if (selected.size === 0) return;
    e.preventDefault();
    const rotationStep = e.deltaY < 0 ? 5 : -5;
    selected.forEach(el => {
      const current = parseFloat(el.dataset.rotation || "0");
      const newRot = (current + rotationStep + 360) % 360;
      el.dataset.rotation = newRot;
      el.style.transform = `rotate(${newRot}deg)`;
    });
    if (onRelease) onRelease();
  });
}

function createMeasureElements(container) {
  const line = document.createElement("div");
  line.className = "measure-line";
  const label = document.createElement("div");
  label.className = "measure-label";
  container.appendChild(line);
  container.appendChild(label);
  return { line, label };
}

function updateMeasure({ line, label }, start, current, scale) {
  const dx = current.x - start.x;
  const dy = current.y - start.y;
  const distPx = Math.sqrt(dx * dx + dy * dy);
  const distIn = (distPx / scale) / 25.4;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  line.style.left = `${start.x}px`;
  line.style.top = `${start.y}px`;
  line.style.width = `${distPx}px`;
  line.style.transform = `rotate(${angle}deg)`;

  label.textContent = `${distIn.toFixed(2)} in`;
  label.style.left = `${start.x + dx / 2}px`;
  label.style.top = `${start.y + dy / 2 - 16}px`;
}

function removeMeasure({ line, label }) {
  line.remove();
  label.remove();
}
