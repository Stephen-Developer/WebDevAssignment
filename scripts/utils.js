function addToArmyWithSelected(id) {
  const unit = units.find(u => u.id === id);
  const select = document.getElementById(`squadSelect-${id}`);
  const selectedModels = select ? parseInt(select.value) : unit.allowedSquads[0].models;
  const squad = unit.allowedSquads.find(s => s.models === selectedModels);

  const army = JSON.parse(localStorage.getItem("army")) || [];

  if (unit.unique && army.some(u => u.id === id)) {
    alert(`${unit.name} is unique and already in your army.`);
    return;
  }

  army.push({
    id: unit.id,
    name: unit.name,
    models: squad.models,
    points: squad.points,
    image: unit.image
  });

  localStorage.setItem("army", JSON.stringify(army));
  alert(`${unit.name} (${squad.models} models) added to army`);
}

window.addToArmyWithSelected = addToArmyWithSelected;