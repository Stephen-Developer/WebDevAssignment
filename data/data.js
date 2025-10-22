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
    "description": "The great labour of the Death Guard is to spread Nurgle's bounteous gift to every corner of realspace. The Biologus Putrifiers have a vital role to play in this process, for it is they who refine the batches of diseased slurry brewed by the Foul Blightspawn, and distil them to the utmost potency. From their backs dangle racks of blight grenades, churning with the latest strains of noxious plagues. With each volley of hurled ordnance, their epidemic spreads; injector pistols unleashing concentrated doses of foulness into their targets."
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
    "description": "Powering into battle on a trio of articulated track units, the Myphitic Blight-hauler is a light Daemon Engine that provides the Death Guard with heavy firepower wherever it is needed. Resembling a Bloat-drone that has been stripped of its turbines, this strange machine has heavy weapons mounted on its carapace, and its rusting armoured plates can absorb impressive punishment - as can its blubbery exposed flesh-parts, which soak up appalling trauma."
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
    "description": "Blightlord Terminators are relentless and unstoppable, elite Death Guard warriors bound forever to mutated suits of Cataphractii armour. They stalk forward with combi-bolters blazing, mercilessly mowing down rank after rank of the enemy. Plague spewers and blight launchers add to the fusilade, reducing infantry to slop and vehicles to foetid husks of rust and decomposing slag."
  },
  {
    "id": 4,
    "name": "Chaos Spawn",
    "category": "beast",
    "image": "images/ChaosSpawn.jpg",
    "limit": 3,
    "allowedSquads": [
      { "models": 2, "points": 80}
    ],
    "description": "Chaos Spawn are mutated mounds of muscle, scaly hides, eyes, talons and teeth, wracked with the endless gifts of the Dark Gods. They are herded towards their terrified foes, advancing in loping runs as they seek only to tear, crush, and consume."
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
    "description": "Daemon Princes are infernal beasts whose Path to Glory has elevated them to daemonhood. Paragons of evil, warped and corrupted by Chaos, they lead their warbands in devastating assaults, striding through attacks from their mortal enemies and unleashing monstrous blows in the name of the Dark Gods."
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
    "description": "Daemon Princes are infernal beasts whose Path to Glory has elevated them to daemonhood. Paragons of evil, warped and corrupted by Chaos, they lead their warbands in devastating assaults, striding through attacks from their mortal enemies and unleashing monstrous blows in the name of the Dark Gods."
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
    "description": "The Pale Harvestmen; the Scythes of Nurgle; the Eyes of Mortarion. The elite warriors of the Deathshroud go by many names, and every one is redolent with a miasma of fear and menace. Swollen with unnatural power, the Deathshroud tower over their enemies. Rusted gauntlets and squirming tentacles clutch huge battle scythes known as manreapers, cursed weapons that slice heads from shoulders and limbs from torsos with every swing. Clouds of plague flies boil around the Deathshroud, while vile smog spills from vents in their armour to choke and blind their foes."
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
    "description": "Defilers are towering daemon engines that stomp across the battlefield on piston-driven legs, their clanking claws and barbed limbs easily capable of slicing a Space Marine in half. No foe is safe from a Defiler - these abominable constructs spit powerful shells from their monstrous cannons, and trigger an arsenal of heavy weapons on a cruel mechanical whim, inflicting a terrible toll no matter the distance."
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
    "description": "Labouring through the air on buzzing turbines and driven by the trapped essence of a Nurgle Daemon, the Foetid Bloat-drone drifts toward the enemy like an armoured plague fly. This hideous war engine bears monstrous weapons onto the battlefield to annihilate the enemies of the Death Guard. Clad in rusting plates of rot-iron armour, their hulls overflowing with flabby foulness, Foetid Bloat-drones can withstand ferocious amounts of punishment and still keep fighting. They are designed to hover in close, drifting lazily through the most treacherous of terrain to provide supporting fire."
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
    "description": "Labouring through the air on buzzing turbines and driven by the trapped essence of a Nurgle Daemon, the Foetid Bloat-drone drifts toward the enemy like an armoured plague fly. This hideous war engine bears monstrous weapons onto the battlefield to annihilate the enemies of the Death Guard. Clad in rusting plates of rot-iron armour, their hulls overflowing with flabby foulness, Foetid Bloat-drones can withstand ferocious amounts of punishment and still keep fighting. They are designed to hover in close, drifting lazily through the most treacherous of terrain to provide supporting fire."
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
    "description": "A revolting stench wafts around the Foul Blightspawn, his corruption clotting the air itself. Breath rattles through pus-slick tubes as he cranks the rusted handle of his malignant churn, bellows wheezing and plague slop roiling in the incubatum upon his back. Some foes stare in bewilderment at this strange performance. Some direct their fire at the Blightspawn, shots rebounding from his armour or thumping harmlessly through rotten flesh in sprays of effluence. The wise, however, flee for their lives."
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
    "description": "Helbrutes are walking engines of destruction, each piloted by a Chaos Space Marine trapped within its plated metal chest, kept alive in a state of agonised insanity. These infernal sarcophagi are fitted with powerful armaments to lay down heavy fire support, or cruel mechanical appendages to hack and crush with enormous strength - all to inflict a portion of their eternal torment on whatever victims they can."
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
    "description": "Sworn to Nurgle's service, Plague Marines have disgusting, rotted bodies that stink of decay. The putrescent slime that oozes from their sores corrodes armour and boils away skin, yet despite their horrific disfigurements they are fearsome warriors indeed. Their rotting brains are inured to the agony of bodily corruption, making them all but immune to the pain or debilitation caused by battle wounds."
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
    "description": "Chaos Land Raiders are massive armoured transports bristling with the heavy armaments of mainline battle tanks and seething with a malevolent spirit. Strung with trophies taken from those slain by the elite warriors the tanks carry to the front line, Land Raiders are the spiked fist of many Heretic Astartes assaults."
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
    "description": "Lord Felthius, a powerful Lord of Contagion. Armed with a manreaper, Felthius can sweep whole crowds of lesser foes aside. Lord Felthius is a particularly fine example of a Chaos Lord who truly loves his work - despite (or possibly because of) his pitted, rotting Terminator armour, his face is modelled in a cheerful rictus, staring proudly at the plague censer held aloft in his right hand which is dripping viscous fluids of an unpleasantly diseased nature. His armour is decorated with chainmail, furs and a boil-covered cloak, and the manreaper in his left hand features connectors and pipes that allow it to secrete diseased fluids that infect everything it touches."
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
    "description": "The Lord of Poxes lumbers into battle amidst a churning cloud of spore-thick plague smog. These foul fumes, which wheeze from the miasmic turbine on his back, can veil advancing Death Guard warriors from harm, and also send enemies crumpling to the ground as they claw at swollen throats and drown on their own dissolving lungs."
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
    "description": "Tubes and pipes erupt in profusion from the Lord of Virulence's armour. These gout noxious fumes are putrid eruptions whose hue and stench guide the fire of artillery engines behind the lines. In their wake, their flensefrond cloaks leave a trail of sickening mucosal slime for hungry Daemon Engines to follow."
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
    "description": "Malignant Plaguecasters are living conduits for the Garden of Nurgle's miasmas and maladies."
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
    "description": "Noxious Blightbringers sow weakness among the enemy as their cursed bell tolls"
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
    "description": "Plagueburst Crawlers are lumbering, formidable siege tanks whose huge ram-blades, thick armour plating and daemonic energies provide them with incredible resilience. Their fearsome plagueburst mortars boast a parabolic fire arc and terrifying range, while the shells they fire combine high-radius explosives with lethal clouds of corrosive spores to inflict damage comparable to that of Imperial Demolisher cannon. The remainder of the Crawler's weaponry is intended to slaughter the foe up close, spraying diseased slime and hails of vital shells at any who approach."
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
    "description": "Bloated with festering corruption, Plague Marines form the mainstay of the Death Guard, and unlike many Traitor Legions their numbers have only swollen as the millennia have passed. Sworn to Nurgle's service, Plague Marines have disgusting, rotted bodies that stink of decay. The putrescent slime that oozes from their sores corrodes armour boils away skin, yet despite their horrific disfigurements they are fearsome warriors indeed."
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
    "description": "Sinister, hooded figures, Plague Surgeons drift through the mayhem of battle like ghoulish spectres of death. They were once Death Guard Apothecaries who brought healing to those who could be saved, and absolution to those who could not. Damnation transformed their order, rendering them the dark antithesis of what they once were. The very touch of a Plague Surgeon is virulently infectious, while every breath they exhale teems with spores and Daemon motes. The miasma that drips from their weapons and surgical instruments only adds to this effect. Any for foolish enough to engage a Plague Surgeon in combat will soon be crawling with empyric disease."
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
    "description": "Shambling across the battlefield in reeking hordes, Poxwalkers engulf their enemies in rotting tides of grasping hands, gnashing teeth and squirming tentacles. They are the cursed victims of Nurgle's plagues, transformed into unliving weapons by the cruel masters of the Death Guard."
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
    "description": "Many of the Predator tanks fielded by the Heretic Astartes are ancient war engines whose rapid-firing cannons or heavy laser turrets have unleashed destruction in battles dating back to the Horus Heresy. Twisted by millennia in service to the Ruinous Powers, their armoured hulls stalk the battlefield like terrible hunting beasts, daemonic maws adorning every barrel and dark icons defacing every surface."
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
    "description": "Many of the Predator tanks fielded by the Heretic Astartes are ancient war engines whose rapid-firing cannons or heavy laser turrets have unleashed destruction in battles dating back to the Horus Heresy. Twisted by millennia in service to the Ruinous Powers, their armoured hulls stalk the battlefield like terrible hunting beasts, daemonic maws adorning every barrel and dark icons defacing every surface."
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
    "description": "Chaos Rhinos are ancient workhorse transport vehicles that have served Humanity for millennia. Though encrusted with heretical icons and corrupted by the Warp, they remain as rugged and reliable as ever, safely carrying their passengers over fire-swept battlefields."
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
    "description": "The worshippers of the Dark Gods know that there is power in words and numbers, incantations and arcane numerology. Seven is the unholy number of Nurgle, and the preachers of this doctrine are the Tallymen. Part priests, part demagogues, part metaphysical scribes and quartermasters, these festering zealots stride to battle festooned with the trappings of their strange craft - reams of parchment, crawling with tallies of seven in a strange, crabbed hand, counting the horrors inflicted on the Death Guard's foes."
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
    "description": "Typhus, Lord of Mortarion's First Plague Company and Host of the Destroyer Hive, is the most feared of all Plague Fleet commanders. From his ancient ship, the Terminus Est, Typhus spreads contagion and misery across the galaxy. That Typhus has been truly blessed by Nurgle is indisputable. For ten thousand years he has been a blight on Imperial worlds; in the wake of Typhus' fleet a virulent plague spreads, creating plague zombies whose bites carry the disease to new victims. Billions have died and been returned to undeath, as the proliferating energies of Chaos distort and mutate this disease to ever-more terrifying vectors."
  },
]