(() => {
  const unitsContainer = document.getElementById("units");
  const armyContainer = document.getElementById("armyContainer");
  const totalPointsEl = document.getElementById("totalPoints");
  const filterButtons = document.querySelectorAll(".filters button");
  
  const loadArmy = () => {
    const army = JSON.parse(localStorage.getItem("army")) || [];
    if (army.length === 0) {
      armyContainer.innerHTML = "<p>Your army is empty.</p>";
      totalPointsEl.textContent = 0;
      return;
    }

    armyContainer.innerHTML = army.map((u, i) => `
      <div class="army-item">
        <div class="army-info">
          <h4>${u.name}</h4>
          <p>${u.models} models</p>
          <p>${u.points} pts</p>
        </div>
        <button class="remove-btn" data-index="${i}">X</button>
      </div>
    `).join("");

    totalPointsEl.textContent = army.reduce((sum, u) => sum + u.points, 0);
  };

  const saveArmy = army => localStorage.setItem("army", JSON.stringify(army));

  const removeUnit = index => {
    const army = JSON.parse(localStorage.getItem("army")) || [];
    army.splice(index, 1);
    saveArmy(army);
    loadArmy();
  };

  const updatePoints = id => {
    const unit = units.find(u => u.id === id);
    const select = document.querySelector(`#squadSelect-${id}`);
    const squad = unit.allowedSquads.find(s => s.models === +select.value);
    document.querySelector(`#points-${id}`).textContent = `${squad.points} pts`;
  };

  const displayUnits = list => {
    unitsContainer.innerHTML = list.map(u => {
      const multiple = u.allowedSquads.length > 1;
      const def = u.allowedSquads[0];

      const selector = multiple
        ? `<label>Squad size:
             <select id="squadSelect-${u.id}">
               ${u.allowedSquads.map(s => `<option value="${s.models}">${s.models} models</option>`).join("")}
             </select>
           </label>`
        : `<p>Size: ${def.models} models</p>`;

      return `
        <div class="unit" data-id="${u.id}">
          <a href="unit.html?id=${u.id}">
            <img src="${u.image}" alt="${u.name}">
          </a>
          <h3>${u.name}</h3>
          <p class="points" id="points-${u.id}">${def.points} pts</p>
          ${selector}
          <button class="button-primary add-army">Add to Army</button>
        </div>`;
    }).join("");
  };

  const filterUnits = category => {
    const filtered = category === "all" ? units : units.filter(i => i.category === category);
    displayUnits(filtered);
  };

  // Event delegation
  unitsContainer.addEventListener("change", e => {
    if (e.target.matches("select[id^='squadSelect-']")) {
      const id = +e.target.id.split("-")[1];
      updatePoints(id);
    }
  });

  unitsContainer.addEventListener("click", e => {
    if (e.target.matches(".add-army")) {
      const id = +e.target.closest(".unit").dataset.id;
      addToArmyWithSelected(id);
      loadArmy();
    }
  });

  armyContainer.addEventListener("click", e => {
    if (e.target.matches(".remove-btn")) {
      removeUnit(+e.target.dataset.index);
      loadArmy();
    }
  });

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterUnits(btn.dataset.filter);
    });
  });

  displayUnits(units);
  loadArmy();
})();