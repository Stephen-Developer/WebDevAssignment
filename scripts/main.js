const unitsContainer = document.getElementById("units");
const armyContainer = document.getElementById("armyContainer");
const totalPointsEl = document.getElementById("totalPoints");

function displayUnits(list) {
  unitsContainer.innerHTML = list.map(u => {
    const multipleSizes = u.allowedSquads.length > 1;
    const defaultSquad = u.allowedSquads[0];

    // Dropdown if multiple options
    const selectHTML = multipleSizes
      ? `
        <label for="squadSelect-${u.id}">Squad size:</label>
        <select id="squadSelect-${u.id}" onchange="updatePoints(${u.id})">
          ${u.allowedSquads.map(s => `<option value="${s.models}">${s.models} models</option>`).join("")}
        </select>
      `
      : `<p>Size: ${defaultSquad.models} models</p>`;

    return `
      <div class="unit">
        <a href="unit.html?id=${u.id}">
          <img src="${u.image}" alt="${u.name}">
        </a>
        <h3>${u.name}</h3>
        <p class="points" id="points-${u.id}">${defaultSquad.points} pts</p>
        ${selectHTML}
        <button class="button-primary" onclick="addToArmyWithSelected(${u.id})">Add to Army</button>
      </div>
    `;
  }).join("");
}

function updatePoints(id) {
  const unit = units.find(u => u.id === id);
  const select = document.getElementById(`squadSelect-${id}`);
  const selectedModels = parseInt(select.value);
  const squad = unit.allowedSquads.find(s => s.models === selectedModels);

  document.getElementById(`points-${id}`).textContent = `${squad.points} pts`;
}

function filterUnits(category) {
  if (category === "all")
    displayUnits(units);
  else 
    displayUnits(units.filter(i => i.category === category));
}

const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

function loadArmy() {
  const army = JSON.parse(localStorage.getItem("army")) || [];

  if (army.length === 0) {
    armyContainer.innerHTML = "<p>Your army is empty.</p>";
    totalPointsEl.textContent = 0;
    return;
  }

  armyContainer.innerHTML = army.map((u, index) => `
    <div class="army-item">
      <div class="army-info">
        <h4>${u.name}</h4>
        <p>${u.models} models</p>
        <p>${u.points} pts</p>
      </div>
      <button class="remove-btn" onclick="removeUnit(${index})">X</button>
    </div>
  `).join("");

  const total = army.reduce((sum, u) => sum + u.points, 0);
  totalPointsEl.textContent = total;
}

function removeUnit(index) {
  const army = JSON.parse(localStorage.getItem("army")) || [];
  army.splice(index, 1);
  localStorage.setItem("army", JSON.stringify(army));
  loadArmy();
}

const originalAdd = addToArmyWithSelected;
addToArmyWithSelected = function(id) {
  originalAdd(id);
  loadArmy();
};

window.removeUnit = removeUnit;
window.loadArmy = loadArmy;

displayUnits(units);
loadArmy();