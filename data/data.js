const units = [
  {
    "id": 1,
    "name": "Biologus Putrifier",
    "category": "character",
    "image": "images/BiologusPutrifier.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 60}
    ],
    "description": ""
  },
  {
    "id": 2,
    "name": "Blighthauler",
    "category": "vehicle",
    "image": "images/Blighthauler.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 100},
      { "models": 2, "points": 200}
    ],
    "description": ""
  },
  {
    "id": 3,
    "name": "Blightlord Terminators",
    "category": "infantry",
    "image": "images/BlightlordTerminators.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 3, "points": 115},
      { "models": 5, "points": 185},
      { "models": 10, "points": 370},
    ],
    "description": ""
  },
  {
    "id": 4,
    "name": "Chaos Spawn",
    "category": "beasts",
    "image": "images/ChaosSpawn.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 2, "points": 80}
    ],
    "description": ""
  },
  {
    "id": 5,
    "name": "Daemon Primarch Mortarion",
    "category": "legendaryCharacter",
    "image": "images/DaemonPrimarchMortarion.jpg",
    "limit": 1,
    "allowedSquads": [
      { "models": 1, "points": 380 }
    ],
    "description": "For ten thousand years Mortarion, Lord of the Death Guard, has crushed his enemies upon the field of battle. Surrounded by chittering Daemon mites, droning flies and noxious plague vapours, Mortarion swoops into battle on vast, creaking wings. the thudding beat of these foul pinions fills the enemy with crawling dread, even as they waft the reek of death across their lines. To even stand in the presence of the Death Lord is lethal, opponents choking and collapsing as they succumb to the myriad plagues that churn the air around him."
  },
  {
    "id": 6,
    "name": "Daemon Prince of Nurgle",
    "category": "character",
    "image": "images/DaemonPrince.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 195 }
    ],
    "description": "A notable member of the Death Guard. One that has been elevated to immortality by Grandfater Nurgle."
  },
  {
    "id": 7,
    "name": "Daemon Prince of Nurgle with Wings",
    "category": "character",
    "image": "images/DaemonPrinceWithWings.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 195 }
    ],
    "description": "A notable member of the Death Guard. One that has been elevated to immortality by Grandfater Nurgle."
  },
  {
    "id": 8,
    "name": "Deathshroud Terminators",
    "category": "infantry",
    "image": "images/Deathshroud.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 3, "points": 160},
      { "models": 6, "points": 320},
    ],
    "description": ""
  },
  {
    "id": 9,
    "name": "Defiler",
    "category": "vehicle",
    "image": "images/Defiler.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 165}
    ],
    "description": ""
  },
  {
    "id": 10,
    "name": "Foetid Bloat Drone",
    "category": "vehicle",
    "image": "images/FoetidBloatDrone.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 100}
    ],
    "description": ""
  },
  {
    "id": 11,
    "name": "Foetid Bloat Drone with Heavy Blight Launcher",
    "category": "vehicle",
    "image": "images/FoetidBloatDroneHeavyBlightLauncher.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 120}
    ],
    "description": ""
  },
  {
    "id": 12,
    "name": "Foul Blightspawn",
    "category": "character",
    "image": "images/FoulBlightSpawn.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 75}
    ],
    "description": ""
  },
  {
    "id": 13,
    "name": "Helbrute",
    "category": "vehicle",
    "image": "images/Helbrute.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 115}
    ],
    "description": ""
  },
  {
    "id": 14,
    "name": "Icon Bearer",
    "category": "character",
    "image": "images/IconBearer.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 45}
    ],
    "description": ""
  },
  {
    "id": 15,
    "name": "Land Raider",
    "category": "vehicle",
    "image": "images/LandRaider.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 240}
    ],
    "description": ""
  },
  {
    "id": 16,
    "name": "Lord of Contagion",
    "category": "character",
    "image": "images/LordOfContagion.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 120}
    ],
    "description": ""
  },
  {
    "id": 17,
    "name": "Lord of Poxes",
    "category": "character",
    "image": "images/LordofPoxes.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 75}
    ],
    "description": ""
  },
  {
    "id": 18,
    "name": "Lord of Virulence",
    "category": "character",
    "image": "images/LordofVirulence.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 100}
    ],
    "description": ""
  },
  {
    "id": 19,
    "name": "Malignant Plaguecaster",
    "category": "character",
    "image": "images/MalignantPlaguecaster.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 60}
    ],
    "description": ""
  },
  {
    "id": 20,
    "name": "Noxious Blightbringer",
    "category": "character",
    "image": "images/NoxiousBlightbringer.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 50}
    ],
    "description": ""
  },
  {
    "id": 21,
    "name": "Plagueburst Crawler",
    "category": "vehicle",
    "image": "images/PlagueburstCrawler.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 210}
    ],
    "description": ""
  },
  {
    "id": 22,
    "name": "Plague Marines",
    "category": "battleLine",
    "image": "images/PlagueMarines.jpg",
    "unique": false,
    "allowedSquads": [
      { "models": 5, "points": 95 },
      { "models": 7, "points": 130 },
      { "models": 10, "points": 190 }
    ],
    "description": "Core infantry with plague weapons and bolters."
  },
  {
    "id": 23,
    "name": "Plague Surgeon",
    "category": "character",
    "image": "images/PlagueSurgeon.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 50}
    ],
    "description": ""
  },
  {
    "id": 24,
    "name": "Poxwalkers",
    "category": "infantry",
    "image": "images/Poxwalkers.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 10, "points": 65},
      { "models": 20, "points": 130},
    ],
    "description": ""
  },
  {
    "id": 25,
    "name": "Predator Annihilator",
    "category": "vehicle",
    "image": "images/PredatorAnnihilator.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 135},
    ],
    "description": ""
  },
  {
    "id": 26,
    "name": "Predator Destructor",
    "category": "vehicle",
    "image": "images/PredatorDestructor.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 145},
    ],
    "description": ""
  },
  {
    "id": 27,
    "name": "Rhino",
    "category": "vehicle",
    "image": "images/Rhino.jpg",
    "limit": 6,
    "allowedSquads": [
      { "models": 1, "points": 85},
    ],
    "description": ""
  },
  {
    "id": 28,
    "name": "Tallyman",
    "category": "character",
    "image": "images/Tallyman.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 1, "points": 50},
    ],
    "description": ""
  },
  {
    "id": 29,
    "name": "Typhus",
    "category": "legendaryCharacter",
    "image": "images/Typhus.jpg",
    "limit": 1,
    "allowedSquads": [
      { "models": 1, "points": 100 }
    ],
    "description": "First Captain of the Death Guard. A potent psyker in Terminator armour. Host of the destroyer hive."
  },
]