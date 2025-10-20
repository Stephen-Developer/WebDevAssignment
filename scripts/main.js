const unitsContainer = document.getElementById("units");

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
        <button onclick="addToArmyWithSelected(${u.id})">Add to Army</button>
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

displayUnits(units);