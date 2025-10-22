(() => {
  // Read the unit ID from the URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const unit = units.find(u => u.id === id);

  if (!unit) {
    document.body.innerHTML = "<p>Unit not found.</p>";
    throw new Error("Unit not found");
  }

  const container = document.getElementById("unit-detail");

  // Display unit details
  function displayUnit() {
    const multipleSizes = unit.allowedSquads.length > 1;
    const defaultSquad = unit.allowedSquads[0];

    const selectHTML = multipleSizes
      ? `
        <label>Squad size:
          <select id="squadSelect-${unit.id}">
            ${unit.allowedSquads
              .map(s => `<option value="${s.models}">${s.models} models</option>`)
              .join("")}
          </select>
        </label>
      `
      : `<p>Size: ${defaultSquad.models} models</p>`;

    container.innerHTML = `
      <div class="unit-details">
        <div class="unit-left">
          <h2>${unit.name}</h2>
          <img src="${unit.image}" alt="${unit.name}">
        </div>
        <div class="unit-right">
          <p>${unit.description}</p>
          <p id="points-${unit.id}">${defaultSquad.points} pts</p>
          ${selectHTML}
          <button class="button-primary" id="addToArmyBtn">Add to Army</button>
        </div>
      </div>
    `;
  }

  function updatePoints() {
    const select = document.querySelector(`#squadSelect-${unit.id}`);
    if (!select) return;
    const selectedModels = parseInt(select.value, 10);
    const squad = unit.allowedSquads.find(s => s.models === selectedModels);
    document.querySelector(`#points-${unit.id}`).textContent = `${squad.points} pts`;
  }

  // Event listeners
  container.addEventListener("change", e => {
    if (e.target.matches(`#squadSelect-${unit.id}`)) updatePoints();
  });

  container.addEventListener("click", e => {
    if (e.target.matches("#addToArmyBtn")) {
      addToArmyWithSelected(unit.id); // from utils.js
    }
  });

  // Initialize
  displayUnit();
})();