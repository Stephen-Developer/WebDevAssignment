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
    id: unit.id,
    name: unit.name,
    models: squad.models,
    points: squad.points,
    image: unit.image
  });

  localStorage.setItem("army", JSON.stringify(army));
  //alert(`${unit.name} (${squad.models} models) added to army`);
}

window.addToArmyWithSelected = addToArmyWithSelected;