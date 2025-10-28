(() => {
  const armyContainer = document.getElementById("army-container");

  function getArmy() {
    return JSON.parse(localStorage.getItem("army")) || [];
  }

  function saveArmy(army) {
    localStorage.setItem("army", JSON.stringify(army));
  }

  function renderArmy() {
    const army = getArmy();

    if (!army.length) {
      armyContainer.innerHTML = "<p>Your army is empty.</p>";
      return;
    }

    const total = army.reduce((sum, i) => sum + i.points, 0);

    armyContainer.innerHTML = `
      <ul class="army-list">
        ${army.map((u, idx) => `
          <li class="armyscreen-item" data-index="${idx}">
            <a href="unit.html?id=${u.id}">
              <img src="${u.image}" alt="${u.name}">
            </a>
            <div>
              <h3>${u.name} (${u.models})</h3>
              <p>${u.points} points</p>
              <button class="button-primary remove">Remove</button>
            </div>
          </li>
        `).join("")}
      </ul>
      <p class="army-total">Total: ${total} points</p>
      <button class="button-primary" id="clearArmy">Clear Army</button>
    `;
  }

  function removeUnit(index) {
    const army = getArmy();
    army.splice(index, 1);
    saveArmy(army);
    renderArmy();
  }

  function clearArmy() {
    localStorage.removeItem("army");
    renderArmy();
  }

  // Event listeners
  armyContainer.addEventListener("click", e => {
    if (e.target.matches(".remove")) {
      const index = +e.target.closest(".armyscreen-item").dataset.index;
      removeUnit(index);
    }
    if (e.target.matches("#clearArmy")) {
      clearArmy();
    }
  });

  renderArmy();
})();