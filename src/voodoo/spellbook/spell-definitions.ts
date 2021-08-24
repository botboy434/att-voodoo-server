export type School = 'abjuration' | 'conjuration' | 'evocation' | 'transmutation'

type Incantation = [string, string];

type Upgrade = {
  name: string;
  description: string;
  isStepFunction: boolean;
  min: number;
  max: number;
  constant: number;
  unit: string;
  units: string;
};

export type Upgrades = {
  [key: string]: Upgrade;
};

type PreparedSpell = {
  name: string;
  school: School;
  requiresPreparation: true;
  verbalTrigger: string;
  incantations: Incantation[];
  upgrades: Upgrades;
  consolidateUpgradesAs?: {
    key: string;
    name: string;
  };
};

type InstantSpell = {
  name: string;
  school: School;
  requiresPreparation: false,
  verbalTrigger?: never;
  incantations: Incantation[];
  upgrades: Upgrades;
  consolidateUpgradesAs?: {
    key: string;
    name: string;
  };
};

type Pages = {
  [spellName: string]: PreparedSpell | InstantSpell
};

export const pages: Pages = {
  acidBolt: {
    name: 'Acid Bolt',
    school: 'evocation',
    requiresPreparation: true,
    verbalTrigger: 'acid bolt',
    incantations: [
      ['skin of wyrm', 'green leather strips'],
      ['tuft of spriggull', 'red spriggull feather'],
      ['sliver of salt', 'salt'],
      ['essence of pyre', 'firework']
    ],
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Evocation',
        description: 'Cast an Acid Bolt from both hands. Be careful when holding shields.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.1,
        unit: ' hand',
        units: ' hands'
      },
      burst: {
        name: 'Burst Fire',
        description: 'Cast multiple Acid Bolts in rapid succession with a single evocation.',
        isStepFunction: true,
        min: 1,
        max: 4,
        constant: 0.04,
        unit: ' bolt',
        units: ' bolts'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Acid Bolt's magical energy after casting it. Increase the number of times you can cast Acid Bolt per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 10,
        constant: 0.06,
        unit: ' charge',
        units: ' charges'
      },
      velocity: {
        name: 'Increased Velocity',
        description: 'Increase the velocity of your Acid Bolts.',
        isStepFunction: false,
        min: 10,
        max: 45,
        constant: 0.15,
        unit: ' m/sec',
        units: ' m/sec'
      }
    }
  },
  anamnesisAppleCoreBurnt: {
    name: 'Anamnesis (burnt apple core)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt apple core'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisAppleCoreCooked: {
    name: 'Anamnesis (cooked apple core)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked apple core'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisAppleCoreRipe: {
    name: 'Anamnesis (ripe apple core)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe apple core'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisAppleFullBurnt: {
    name: 'Anamnesis (burnt apple)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt apple'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisAppleFullCooked: {
    name: 'Anamnesis (cooked apple)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked apple'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisAppleFullRipe: {
    name: 'Anamnesis (ripe apple)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe apple'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisBlueberryFullBurnt: {
    name: 'Anamnesis (burnt blueberry)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt blueberry'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisBlueberryFullCooked: {
    name: 'Anamnesis (cooked blueberry)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked blueberry'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisBlueberryFullRipe: {
    name: 'Anamnesis (ripe blueberry)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe blueberry'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisCarrotFullBurnt: {
    name: 'Anamnesis (burnt carrot)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt carrot'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisCarrotFullCooked: {
    name: 'Anamnesis (cooked carrot)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked carrot'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisCarrotFullRipe: {
    name: 'Anamnesis (ripe carrot)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe carrot'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisEggplantFullBurnt: {
    name: 'Anamnesis (burnt eggplant)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt eggplant'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisEggplantFullCooked: {
    name: 'Anamnesis (cooked eggplant)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked eggplant'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisEggplantFullRipe: {
    name: 'Anamnesis (ripe eggplant)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe eggplant'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisGarlicFullBurnt: {
    name: 'Anamnesis (burnt garlic)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt garlic'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisGarlicFullCooked: {
    name: 'Anamnesis (cooked garlic)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked garlic'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisGarlicFullRipe: {
    name: 'Anamnesis (ripe garlic)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe garlic'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisGarlicFullUnripe: {
    name: 'Anamnesis (unripe garlic)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'unripe garlic'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisOnionFullBurnt: {
    name: 'Anamnesis (burnt onion)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt onion'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisOnionFullCooked: {
    name: 'Anamnesis (cooked onion)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked onion'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisOnionFullRipe: {
    name: 'Anamnesis (ripe onion)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe onion'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisOnionFullUnripe: {
    name: 'Anamnesis (unripe onion)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'unripe onion'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPotatoFullBurnt: {
    name: 'Anamnesis (burnt potato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt potato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPotatoFullCooked: {
    name: 'Anamnesis (cooked potato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked potato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPotatoFullRipe: {
    name: 'Anamnesis (ripe potato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe potato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPotatoFullUnripe: {
    name: 'Anamnesis (unripe potato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'unripe potato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPumpkinPieceBurnt: {
    name: 'Anamnesis (burnt pumpkin piece)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt pumpkin piece'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPumpkinPieceCooked: {
    name: 'Anamnesis (cooked pumpkin piece)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked pumpkin piece'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisPumpkinPieceRipe: {
    name: 'Anamnesis (ripe pumpkin piece)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe pumpkin piece'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisTomatoFullBurnt: {
    name: 'Anamnesis (burnt tomato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'burnt tomato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisTomatoFullCooked: {
    name: 'Anamnesis (cooked tomato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'cooked tomato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  anamnesisTomatoFullRipe: {
    name: 'Anamnesis (ripe tomato)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of produce', 'ripe tomato'],
      ['sliver of gems', 'blue crystal shard']
    ],
    upgrades: {},
    consolidateUpgradesAs: {
      key: 'anamnesis',
      name: 'Anamnesis'
    }
  },
  aptitude: {
    name: 'Aptitude',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'aptitude',
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['sliver of gems', 'blue crystal shard'],
      ['essence of produce', 'burnt onion']
    ],
    upgrades: {
      concentration: {
        name: 'Concentration',
        description: 'Increase the duration of your Aptitude.',
        isStepFunction: true,
        min: 60,
        max: 1800,
        constant: 0.035,
        unit: ' second',
        units: ' seconds'
      },
      intensify: {
        name: 'Intensify',
        description: 'Increase the skill XP buff of your Aptitude.',
        isStepFunction: false,
        min: 20,
        max: 200,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  arrow: {
    name: 'Arrow',
    school: 'evocation',
    requiresPreparation: true,
    verbalTrigger: 'arrow',
    incantations: [
      ['skin of tera', 'oak wedge'],
      ['tuft of spriggull', 'red spriggull feather'],
      ['artifact of earth', 'iron ingot']
    ],
    // @todo balance upgrades
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Evocation',
        description: 'Cast an Arrow from both hands. Be careful when holding shields.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.5,
        unit: ' hand',
        units: ' hands'
      },
      burst: {
        name: 'Burst Fire',
        description: 'Cast multiple Arrows in rapid succession with a single evocation.',
        isStepFunction: true,
        min: 1,
        max: 6,
        constant: 0.2,
        unit: ' arrow',
        units: ' arrows'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Arrow's magical energy after casting it. Increase the number of times you can cast Arrow per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 20,
        constant: 0.07,
        unit: ' charge',
        units: ' charges'
      },
      velocity: {
        name: 'Increased Velocity',
        description: 'Increase the velocity of your Arrows.',
        isStepFunction: false,
        min: 30,
        max: 60,
        constant: 0.3,
        unit: ' m/sec',
        units: ' m/sec'
      }
    }
  },
  conjureCrystalLance: {
    name: 'Conjure Crystal Lance',
    school: 'conjuration',
    requiresPreparation: true,
    verbalTrigger: 'crystal lance',
    incantations: [
      ['heart of weapon', 'rusty pitchfork'],
      ['aether of gems', 'blue crystal gem'],
      ['artifact of earth', 'electrum ingot']
    ],
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Conjuration',
        description: 'Summon a Crystal Lance in each hand.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.25,
        unit: ' hand',
        units: ' hands'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Conjure Crystal Lance's magical energy after casting it. Increase the number of times you can cast Conjure Crystal Lance per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 10,
        constant: 0.06,
        unit: ' charge',
        units: ' charges'
      }
    }
  },
  conjureCrystalPick: {
    name: 'Conjure Crystal Pick',
    school: 'conjuration',
    requiresPreparation: true,
    verbalTrigger: 'crystal pick',
    incantations: [
      ['heart of weapon', 'rusty pickaxe'],
      ['aether of gems', 'blue crystal gem'],
      ['artifact of earth', 'silver ingot']
    ],
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Conjuration',
        description: 'Summon a Crystal Pick in each hand.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.25,
        unit: ' hand',
        units: ' hands'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Conjure Crystal Pick's magical energy after casting it. Increase the number of times you can cast Conjure Crystal Pick per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 10,
        constant: 0.06,
        unit: ' charge',
        units: ' charges'
      }
    }
  },
  conjureCrystalSword: {
    name: 'Conjure Crystal Sword',
    school: 'conjuration',
    requiresPreparation: true,
    verbalTrigger: 'crystal sword',
    incantations: [
      ['heart of weapon', 'rusty shortsword'],
      ['aether of gems', 'blue crystal gem'],
      ['artifact of earth', 'palladium ingot']
    ],
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Conjuration',
        description: 'Summon a Crystal Sword in each hand.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.25,
        unit: ' hand',
        units: ' hands'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Conjure Crystal Sword's magical energy after casting it. Increase the number of times you can cast Conjure Crystal Sword per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 10,
        constant: 0.06,
        unit: ' charge',
        units: ' charges'
      }
    }
  },
  conjureWater: {
    name: 'Conjure Water',
    school: 'conjuration',
    requiresPreparation: false,
    incantations: [
      ['bonds of silica', 'empty flask'],
      ['fluid of produce', 'ripe blueberry']
    ],
    upgrades: {
      copious: {
        name: 'Copious Conjuration',
        description: 'Conjure additional servings of water.',
        isStepFunction: true,
        min: 1,
        max: 14,
        constant: 0.1,
        unit: ' serving',
        units: ' servings'
      }
    }
  },
  craftFlask: {
    name: 'Craft Flask',
    school: 'conjuration',
    requiresPreparation: false,
    incantations: [
      ['essence of silica', 'sandstone'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  craftSoulbond: {
    name: 'Craft Soulbond',
    school: 'conjuration',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'iron ingot'],
      ['aether of gems', 'blue crystal shard']
    ],
    upgrades: {}
  },
  dart: {
    name: 'Dart',
    school: 'evocation',
    requiresPreparation: true,
    verbalTrigger: 'dart',
    incantations: [
      ['skin of tera', 'oak wedge'],
      ['tuft of spriggull', 'blue spriggull feather'],
      ['heart of tera', 'gotera seedling']
    ],
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Evocation',
        description: 'Cast a Dart from both hands. Be careful when holding shields.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.5,
        unit: ' hand',
        units: ' hands'
      },
      burst: {
        name: 'Burst Fire',
        description: 'Cast multiple Darts in rapid succession with a single evocation.',
        isStepFunction: true,
        min: 1,
        max: 6,
        constant: 0.2,
        unit: ' dart',
        units: ' darts'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Dart's magical energy after casting it. Increase the number of times you can cast Dart per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 20,
        constant: 0.07,
        unit: ' charge',
        units: ' charges'
      },
      velocity: {
        name: 'Increased Velocity',
        description: 'Increase the velocity of your Darts.',
        isStepFunction: false,
        min: 10,
        max: 45,
        constant: 0.3,
        unit: ' m/sec',
        units: ' m/sec'
      }
    }
  },
  fire: {
    name: 'Fire',
    school: "evocation",
    requiresPreparation: true,
    verbalTrigger: 'flames',
    incantations: [
      ['essence of embers', 'grass clump'],
      ['fragment of pyre', 'flint']
    ],
    upgrades: {
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Fire's magical energy after casting it. Increase the number of times you can cast Fire per preparation.",
        isStepFunction: true,
        min: 4.5,
        max: 50,
        constant: 0.15,
        unit: ' charge',
        units: ' charges'
      }
    }
  },
  flaskOfEndlessTeleportation: {
    name: 'Flask of Endless Teleportation',
    school: 'conjuration',
    requiresPreparation: false,
    incantations: [
      ['fluid of silica', 'flask containing teleportation potion'],
      ['essence of fungi', 'burnt red mushroom']
    ],
    upgrades: {
      copious: {
        name: 'Copious Conjuration',
        description: 'Conjure additional servings of teleportation potion.',
        isStepFunction: true,
        min: 1,
        max: 14,
        constant: 0.1,
        unit: ' serving',
        units: ' servings'
      }
    }
  },
  flaskOfEndlessWater: {
    name: 'Flask of Endless Water',
    school: 'conjuration',
    requiresPreparation: false,
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['fluid of produce', 'ripe blueberry']
    ],
    upgrades: {
      copious: {
        name: 'Copious Conjuration',
        description: 'Conjure additional servings of water.',
        isStepFunction: true,
        min: 1,
        max: 14,
        constant: 0.1,
        unit: ' serving',
        units: ' servings'
      }
    }
  },
  frostBolt: {
    name: 'Frost Bolt',
    school: 'evocation',
    requiresPreparation: true,
    verbalTrigger: 'frost bolt',
    incantations: [
      ['skin of wyrm', 'green leather roll'],
      ['tuft of spriggull', 'blue spriggull feather'],
      ['aether of gems', 'blue crystal gem'],
      ['essence of pyre', 'dynamite']
    ],
    upgrades: {
      ambidextrous: {
        name: 'Ambidextrous Evocation',
        description: 'Cast a Frost Bolt from both hands. Be careful when holding shields.',
        isStepFunction: true,
        min: 1,
        max: 2,
        constant: 0.1,
        unit: ' hand',
        units: ' hands'
      },
      burst: {
        name: 'Burst Fire',
        description: 'Cast multiple Frost Bolts in rapid succession with a single evocation.',
        isStepFunction: true,
        min: 1,
        max: 4,
        constant: 0.04,
        unit: ' bolt',
        units: ' bolts'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Frost Bolt's magical energy after casting it. Increase the number of times you can cast Frost Bolt per preparation.",
        isStepFunction: true,
        min: 0.5,
        max: 10,
        constant: 0.06,
        unit: ' charge',
        units: ' charges'
      },
      velocity: {
        name: 'Increased Velocity',
        description: 'Increase the velocity of your Frost Bolts.',
        isStepFunction: false,
        min: 10,
        max: 45,
        constant: 0.15,
        unit: ' m/sec',
        units: ' m/sec'
      }
    }
  },
  haste: {
    name: 'Haste',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'haste',
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['sliver of gems', 'blue crystal shard'],
      ['essence of dais', 'burnt dais leg'],
      ['tuft of spriggull', 'red spriggull feather']
    ],
    upgrades: {
      concentration: {
        name: 'Concentration',
        description: 'Increase the duration of your Haste.',
        isStepFunction: true,
        min: 25,
        max: 600,
        constant: 0.04,
        unit: ' second',
        units: ' seconds'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Haste's magical energy after casting it. Increase the number of times you can cast Haste per preparation.",
        isStepFunction: true,
        min: 1,
        max: 10.49,
        constant: 0.25,
        unit: ' charge',
        units: ' charges'
      },
      intensify: {
        name: 'Intensify',
        description: 'Increase the speed buff of your Haste.',
        isStepFunction: false,
        min: 20,
        max: 200,
        constant: 0.1,
        unit: '%',
        units: '%'
      },
      projection: {
        name: 'Projection',
        description: 'When casting Haste, you may affect Soulbonded people in your immediate surroundings. Increase the radius of your Haste projection. Requires at least one active Soulbond.',
        isStepFunction: false,
        min: 0,
        max: 50,
        constant: 0.25,
        unit: ' m',
        units: ' m'
      }
    }
  },
  healWounds: {
    name: 'Heal Wounds',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'heal wounds',
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['sliver of gems', 'blue crystal shard'],
      ['artifact of tera', 'healing pod']
    ],
    upgrades: {
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Heal Wounds' magical energy after casting it. Increase the number of times you can cast Heal Wounds per preparation.",
        isStepFunction: true,
        min: 1,
        max: 10.49,
        constant: 0.25,
        unit: ' charge',
        units: ' charges'
      },
      intensify: {
        name: 'Intensify',
        description: 'Increase the amount of health restored by your Heal Wounds.',
        isStepFunction: false,
        min: 1,
        max: 20,
        constant: 0.054,
        unit: ' heart',
        units: ' hearts'
      },
      projection: {
        name: 'Projection',
        description: 'When casting Heal Wounds, you may affect Soulbonded people in your immediate surroundings. Increase the radius of your Heal Wounds projection. Requires at least one active Soulbond.',
        isStepFunction: false,
        min: 0,
        max: 50,
        constant: 0.25,
        unit: ' m',
        units: ' m'
      }
    }
  },
  heroism: {
    name: 'Heroism',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'heroism',
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['sliver of gems', 'blue crystal shard'],
      ['essence of produce', 'burnt carrot']
    ],
    upgrades: {
      concentration: {
        name: 'Concentration',
        description: 'Increase the duration of your Heroism.',
        isStepFunction: true,
        min: 6,
        max: 60,
        constant: 0.1,
        unit: ' second',
        units: ' seconds'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Heroism's magical energy after casting it. Increase the number of times you can cast Heroism per preparation.",
        isStepFunction: true,
        min: 1,
        max: 10.49,
        constant: 0.25,
        unit: ' charge',
        units: ' charges'
      },
      intensify: {
        name: 'Intensify',
        description: 'Increase the maximum health buff of your Heroism.',
        isStepFunction: false,
        min: 5,
        max: 100,
        constant: 0.054,
        unit: '%',
        units: '%'
      },
      projection: {
        name: 'Projection',
        description: 'When casting Heroism, you may affect Soulbonded people in your immediate surroundings. Increase the radius of your Heroism projection. Requires at least one active Soulbond.',
        isStepFunction: false,
        min: 0,
        max: 50,
        constant: 0.25,
        unit: ' m',
        units: ' m'
      }
    }
  },
  liquateElectrum: {
    name: 'Liquate Electrum',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'electrum ingot'],
      ['fragment of gems', 'blue crystal shard'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  liquatePalladium: {
    name: 'Liquate Palladium',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'palladium ingot'],
      ['fragment of gems', 'blue crystal shard'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  liquateRedIron: {
    name: 'Liquate Red Iron',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'red iron ingot'],
      ['fragment of gems', 'blue crystal shard'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  liquateValyan: {
    name: 'Liquate Valyan',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'valyan ingot'],
      ['fragment of gems', 'blue crystal shard'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  liquateViridium: {
    name: 'Liquate Viridium',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'viridium ingot'],
      ['fragment of gems', 'blue crystal shard'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  raiseOakTree: {
    name: 'Raise Oak Tree',
    school: 'conjuration',
    requiresPreparation: true,
    verbalTrigger: 'oak tree',
    incantations: [
      ['artifact of tera', 'oak tree seed'],
      ['fluid of silica', 'flask containing water'],
      ['fragment of pyre', 'flint']
    ],
    upgrades: {
      arborist: {
        name: 'Arborist',
        description: 'Raise more intricate oak trees. Increase the chance of creating a tree with more segments, yielding more wood when cut down.',
        isStepFunction: false,
        min: 5,
        max: 25,
        constant: 0.2,
        unit: ' segment',
        units: ' segments'
      }
    }
  },
  repairAshDevice: {
    name: 'Repair Ash Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['fragment of tera', 'ash wedge'],
      ['skin of dais', 'tan leather strips'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your ash repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairBirchDevice: {
    name: 'Repair Birch Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['fragment of tera', 'birch wedge'],
      ['skin of dais', 'tan leather strips'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your birch repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairCopperDevice: {
    name: 'Repair Copper Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'copper ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your copper repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairElectrumDevice: {
    name: 'Repair Electrum Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'electrum ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your electrum repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairGoldDevice: {
    name: 'Repair Gold Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'gold ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your gold repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairIronDevice: {
    name: 'Repair Iron Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'iron ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your iron repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairMythrilDevice: {
    name: 'Repair Mythril Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'mythril ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your mythril repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairOakDevice: {
    name: 'Repair Oak Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['fragment of tera', 'oak wedge'],
      ['skin of dais', 'tan leather strips'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your oak repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairPalladiumDevice: {
    name: 'Repair Palladium Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'palladium ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your palladium repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairRedIronDevice: {
    name: 'Repair Red Iron Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'red iron ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your red iron repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairRedwoodDevice: {
    name: 'Repair Redwood Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['fragment of tera', 'redwood wedge'],
      ['skin of dais', 'tan leather strips'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your redwood repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairSilverDevice: {
    name: 'Repair Silver Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'silver ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your silver repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairValyanDevice: {
    name: 'Repair Valyan Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'valyan ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your valyan repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairViridiumDevice: {
    name: 'Repair Viridium Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['artifact of earth', 'viridium ingot'],
      ['heart of embers', 'coal'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your viridium repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  repairWalnutDevice: {
    name: 'Repair Walnut Device',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['bonds of weapon', 'hilted apparatus'],
      ['fragment of tera', 'walnut wedge'],
      ['skin of dais', 'tan leather strips'],
      ['fragment of spriggull', 'spriggull bone shard']
    ],
    upgrades: {
      reconstructor: {
        name: 'Reconstructor',
        description: 'Improve the quality of your walnut repairs.',
        isStepFunction: false,
        min: 10,
        max: 100,
        constant: 0.05,
        unit: '%',
        units: '%'
      }
    }
  },
  smokescreen: {
    name: 'Smokescreen',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'smokescreen',
    incantations: [
      ['essence of embers', 'grass clump'],
      ['bonds of silica', 'empty flask']
    ],
    upgrades: {
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Smokescreen's magical energy after casting it. Increase the number of times you can cast Smokescreen per preparation.",
        isStepFunction: true,
        min: 1,
        max: 10.49,
        constant: 0.25,
        unit: ' charge',
        units: ' charges'
      }
    }
  },
  stoneskin: {
    name: 'Stoneskin',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'stoneskin',
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['sliver of gems', 'blue crystal shard'],
      ['essence of produce', 'burnt eggplant'],
      ['fragment of earth', 'rock']
    ],
    upgrades: {
      concentration: {
        name: 'Concentration',
        description: 'Increase the duration of your Stoneskin.',
        isStepFunction: true,
        min: 6,
        max: 60,
        constant: 0.1,
        unit: ' second',
        units: ' seconds'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain Stoneskin's magical energy after casting it. Increase the number of times you can cast Stoneskin per preparation.",
        isStepFunction: true,
        min: 1,
        max: 10.49,
        constant: 0.25,
        unit: ' charge',
        units: ' charges'
      },
      intensify: {
        name: 'Intensify',
        description: 'Increase the damage protection buff of your Stoneskin.',
        isStepFunction: false,
        min: 20,
        max: 500,
        constant: 0.042,
        unit: '%',
        units: '%'
      },
      projection: {
        name: 'Projection',
        description: 'When casting Stoneskin, you may affect Soulbonded people in your immediate surroundings. Increase the radius of your Stoneskin projection. Requires at least one active Soulbond.',
        isStepFunction: false,
        min: 0,
        max: 50,
        constant: 0.25,
        unit: ' m',
        units: ' m'
      }
    }
  },
  transmuteCopperIngotToOre: {
    name: 'Transmute Copper Ingot To Ore',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'copper ingot'],
      ['bonds of earth', 'rock']
    ],
    upgrades: {}
  },
  transmuteCopperToIron: {
    name: 'Transmute Copper To Iron',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'copper ingot'],
      ['essence of gems', 'blue crystal gem'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  transmuteGoldIngotToOre: {
    name: 'Transmute Gold Ingot To Ore',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'gold ingot'],
      ['bonds of earth', 'rock']
    ],
    upgrades: {}
  },
  transmuteGoldToSilver: {
    name: 'Transmute Gold To Silver',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'gold ingot'],
      ['aether of gems', 'blue crystal gem'],
      ['heart of pyre', 'molten core']
    ],
    upgrades: {}
  },
  transmuteIronHandleMedium: {
    name: 'Transmute Iron Handle (medium)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of weapon', 'medium straight wooden handle'],
      ['artifact of earth', 'iron ingot'],
      ['bonds of dais', 'tan leather strips']
    ],
    upgrades: {}
  },
  transmuteIronHandleShort: {
    name: 'Transmute Iron Handle (short)',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['heart of weapon', 'short wooden handle'],
      ['artifact of earth', 'iron ingot'],
      ['bonds of dais', 'tan leather strips']
    ],
    upgrades: {}
  },
  transmuteIronIngotToOre: {
    name: 'Transmute Iron Ingot To Ore',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'iron ingot'],
      ['bonds of earth', 'rock']
    ],
    upgrades: {}
  },
  transmuteIronToGold: {
    name: 'Transmute Iron To Gold',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'iron ingot'],
      ['essence of gems', 'blue crystal gem'],
      ['heart of embers', 'coal']
    ],
    upgrades: {}
  },
  transmuteMythrilIngotToOre: {
    name: 'Transmute Mythril Ingot To Ore',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'mythril ingot'],
      ['bonds of earth', 'rock']
    ],
    upgrades: {}
  },
  transmuteSilverIngotToOre: {
    name: 'Transmute Silver Ingot To Ore',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'silver ingot'],
      ['bonds of earth', 'rock']
    ],
    upgrades: {}
  },
  transmuteSilverToMythril: {
    name: 'Transmute Silver To Mythril',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['artifact of earth', 'silver ingot'],
      ['aether of gems', 'blue crystal gem'],
      ['heart of pyre', 'fuel core']
    ],
    upgrades: {}
  },
  transmuteTeleportationPotion: {
    name: 'Transmute Teleportation Potion',
    school: 'transmutation',
    requiresPreparation: false,
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['essence of fungi', 'burnt red mushroom']
    ],
    upgrades: {}
  },
  trueStrike: {
    name: 'True Strike',
    school: 'abjuration',
    requiresPreparation: true,
    verbalTrigger: 'true strike',
    incantations: [
      ['fluid of silica', 'flask containing water'],
      ['sliver of gems', 'blue crystal shard'],
      ['heart of babu', 'burnt babu leg'],
      ['essence of weapon', 'rusty axe']
    ],
    upgrades: {
      concentration: {
        name: 'Concentration',
        description: 'Increase the duration of your True Strike.',
        isStepFunction: true,
        min: 6,
        max: 60,
        constant: 0.1,
        unit: ' second',
        units: ' seconds'
      },
      eidetic: {
        name: 'Eidetic Memory',
        description: "Train your mind to retain True Strike's magical energy after casting it. Increase the number of times you can cast True Strike per preparation.",
        isStepFunction: true,
        min: 1,
        max: 10.49,
        constant: 0.25,
        unit: ' charge',
        units: ' charges'
      },
      intensify: {
        name: 'Intensify',
        description: 'Increase the damage buff of your True Strike.',
        isStepFunction: false,
        min: 5,
        max: 100,
        constant: 0.054,
        unit: '%',
        units: '%'
      },
      projection: {
        name: 'Projection',
        description: 'When casting True Strike, you may affect Soulbonded people in your immediate surroundings. Increase the radius of your True Strike projection. Requires at least one active Soulbond.',
        isStepFunction: false,
        min: 0,
        max: 50,
        constant: 0.25,
        unit: ' m',
        units: ' m'
      }
    }
  },
};