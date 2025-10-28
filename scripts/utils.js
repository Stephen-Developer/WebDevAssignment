const categoryOrder = [
  "legendaryCharacter",
  "character",
  "battleLine",
  "infantry",
  "beast",
  "vehicle"
];

function nextInstanceId() {
  const n = (parseInt(localStorage.getItem("armyCounter") || "0", 10) + 1);
  localStorage.setItem("armyCounter", String(n));
  return n;
}

function addToArmyWithSelected(id) {
  const unit = units.find(u => u.id === id);
  const select = document.getElementById(`squadSelect-${id}`);
  const selectedModels = select ? parseInt(select.value) : unit.allowedSquads[0].models;
  const squad = unit.allowedSquads.find(s => s.models === selectedModels);

  const army = JSON.parse(localStorage.getItem("army")) || [];

  const count = army.filter(u => u.id === id).length;
  if (count >= unit.limit) {
    alert(`${unit.name} has a limit of ${unit.limit} and you already have ${count} in your army.`);
    return;
  }

  army.push({
    instanceId: nextInstanceId(),
    id: unit.id,
    name: unit.name,
    category: unit.category,
    models: squad.models,
    points: squad.points,
    image: unit.image
  });

  army.sort((a, b) => {
    const aCat = categoryOrder.indexOf(a.category);
    const bCat = categoryOrder.indexOf(b.category);

    // unknown categories go to the end
    const catDiff = (aCat === -1 ? Infinity : aCat) - (bCat === -1 ? Infinity : bCat);
    if (catDiff !== 0)
      return catDiff;

    // same category -> alphabetical
    return a.name.localeCompare(b.name);
  });

  localStorage.setItem("army", JSON.stringify(army));
}

window.addToArmyWithSelected = addToArmyWithSelected;