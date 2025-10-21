const armyContainer = document.getElementById("army-container");
let army = JSON.parse(localStorage.getItem("army")) || [];

function renderArmy() {
  if (!army.length) {
    armyContainer.innerHTML = "<p>Your army is empty.</p>";
    return;
  }

  const total = army.reduce((sum, i) => sum + i.points, 0);

  armyContainer.innerHTML = `
    <ul class="army-list">
      ${army.map((u, idx) => `
        <li class="army-item">
          <img src="${u.image}" alt="${u.name}">
          <div>
            <h3>${u.name} (${u.models})</h3>
            <p>${u.points} points</p>
          </div>
          <button class="button-primary" onclick="removeUnit(${idx})">Remove</button>
          <button class="remove-btn" onclick="removeUnit(${idx})">Remove</button>
        </li>
      `).join("")}
    </ul>
    <p class="army-total">Total: ${total} points</p>
    <button class="remove-btn" onclick="clearArmy()">Clear Army</button>
  `;
}

function removeUnit(index) {
  army.splice(index, 1);
  localStorage.setItem("army", JSON.stringify(army));
  renderArmy();
}

function clearArmy() {
  localStorage.removeItem("army");
  army = [];
  renderArmy();
}

window.removeUnit = removeUnit;
window.clearArmy = clearArmy;

renderArmy();