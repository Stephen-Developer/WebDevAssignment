// Read the unit ID from the URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Find the matching unit from data.js
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

  // Dropdown for multi-size units
  const selectHTML = multipleSizes
    ? `
      <label for="squadSelect-${unit.id}">Squad size:</label>
      <select id="squadSelect-${unit.id}" onchange="updatePoints(${unit.id})">
        ${unit.allowedSquads.map(s => `<option value="${s.models}">${s.models} models</option>`).join("")}
      </select>
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
        <button class="button-primary" onclick="addToArmyWithSelected(${unit.id})">Add to Army</button>
      </div>
    </div>
  `;
}

// Update displayed points when squad size changes
function updatePoints(id) {
  const select = document.getElementById(`squadSelect-${id}`);
  const selectedModels = parseInt(select.value);
  const squad = unit.allowedSquads.find(s => s.models === selectedModels);
  document.getElementById(`points-${id}`).textContent = `${squad.points} pts`;
}

// Initialize
displayUnit();
window.updatePoints = updatePoints;
window.addToArmyWithSelected = addToArmyWithSelected;