import { FirearmMod, GearWeaponFireArms } from "../types/Resources"

const firearms: GearWeaponFireArms[] = [
  {
    name: "Defiance Super Shock",
    availability: "1",
    cost: 340,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "TASERS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
      accessorymod: [
        {
          hook: "UNDER",
          item: "Defiance Super Shock Club",
        },
      ],
    },
    weapon: {
      dv: "6S(e)",
      ar: [10, 6, 0, 0, 0],
      mode: "SS",
      ammo: "4(m)",
      skill: "Firearms",
      specialization: "pistols",
      nowifi: true,
    },
  },
  {
    name: "Yamaha Pulsar 1",
    availability: "1",
    cost: 325,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "TASERS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      dv: "4S(e)",
      ar: [9, 9, 0, 0, 0],
      mode: "SS",
      ammo: "4(m)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Yamaha Pulsar 2",
    availability: "1",
    cost: 350,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "TASERS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
      accessorymod: [
        {
          hook: "UNDER",
          item: "Yamaha Pulsar 2 Club",
        },
      ],
    },
    weapon: {
      dv: "4S(e)",
      ar: [9, 9, 0, 0, 0],
      mode: "SS",
      ammo: "4(m)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Fichetti Tiffani Needler",
    availability: "2",
    cost: 435,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "HOLDOUTS",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [10, 6, 2, 0, 0],
      mode: "SS",
      ammo: "4(c)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Streetline Special",
    availability: "2",
    cost: 325,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "HOLDOUTS",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [8, 8, 0, 0, 0],
      mode: "SS",
      ammo: "6(c)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Walther Palm Pistol",
    availability: "2",
    cost: 325,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "HOLDOUTS",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [12, 7, 0, 0, 0],
      mode: "SS/BF",
      ammo: "6(b)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Ares Light Fire 70",
    availability: "3L",
    cost: 350,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      dv: "2P",
      ar: [10, 7, 6, 0, 0],
      mode: "SA",
      ammo: "16(c)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Ares Light Fire 75",
    availability: "3L",
    cost: 400,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      dv: "2P",
      ar: [10, 7, 6, 0, 0],
      mode: "SA",
      ammo: "16(c)",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "2L",
    cost: 260,
    name: "Beretta 101T",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      ammo: "21(c)",
      dv: "2P",
      ar: [9, 8, 6, 0, 0],
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "3L",
    cost: 460,
    name: "Beretta 201T",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Removable Stock",
        },
      ],
    },
    weapon: {
      ammo: "21(c)",
      dv: "2P",
      ar: [9, 8, 6, 0, 0],
      mode: "SA/FA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "2L",
    cost: 230,
    name: "Colt America L36",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      ammo: "11(c)",
      ar: [8, 8, 6, 0, 0],
      dv: "2P",
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "2L",
    cost: 390,
    name: "Fichetti Security 600",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
        {
          hook: "STOCK",
          item: "Removable Stock",
        },
      ],
    },
    weapon: {
      ammo: "30(c)",
      ar: [10, 9, 6, 0, 0],
      dv: "2P",
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Rudger Redhawk",
    availability: "2L",
    cost: 250,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS LIGHT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      ammo: "8(cy)",
      ar: [7, 10, 7, 0, 0],
      dv: "3P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    name: "Ares Crusader Ii",
    availability: "4L",
    cost: 520,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "MACHINE PISTOLS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
      ],
      accessorymod: [
        {
          hook: "BARREL",
          item: "Gas-vent System",
          rating: 2,
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      ar: [9, 9, 7, 0, 0],
      ammo: "40(c)",
      dv: "2P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    name: "Ceska Black Scorpion",
    availability: "3L",
    cost: 510,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "MACHINE PISTOLS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
      ],
    },
    weapon: {
      ar: [10, 9, 8, 0, 0],
      ammo: "35(c)",
      dv: "2P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    name: "Steyr TMP",
    availability: "3L",
    cost: 690,
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "MACHINE PISTOLS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [8, 8, 6, 0, 0],
      ammo: "30(c)",
      dv: "2P",
      mode: "SA/FA",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "2L",
    cost: 750,
    name: "Ares Predator VI",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      ar: [10, 10, 8, 0, 0],
      ammo: "15(c)",
      dv: "3P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "4L",
    cost: 610,
    name: "Ares Viper Slivergun",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      accessorymod: [
        {
          hook: "BARREL",
          item: "Silencer",
        },
      ],
    },
    weapon: {
      ar: [12, 8, 6, 0, 0],
      ammo: "30(c)",
      dv: "3P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "2L",
    cost: 640,
    name: "Browning Ultra Power",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [10, 9, 6, 0, 0],
      ammo: "10(c)",
      dv: "3P",
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "3L",
    cost: 425,
    name: "Colt Government 2076",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [10, 8, 6, 0, 0],
      ammo: "14(c)",
      dv: "3P",
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "3L",
    cost: 425,
    name: "Colt Manhunter",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      ar: [11, 9, 7, 0, 0],
      ammo: "14(c)",
      dv: "3P",
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "3L",
    cost: 400,
    name: "Ruger Super Warhawk",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      ar: [8, 11, 8, 0, 0],
      ammo: "6(cy)",
      dv: "4P",
      mode: "SA",
      skill: "Firearms",
      specialization: "pistols",
    },
  },
  {
    availability: "2L",
    cost: 730,
    name: "Colt Cobra TZ-100",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
      ],
    },
    weapon: {
      ar: [9, 9, 6, 0, 0],
      ammo: "32(c)",
      dv: "3P",
      mode: "SA/FA",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "2L",
    cost: 785,
    name: "Colt Cobra TZ-110",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [10, 10, 7, 0, 0],
      ammo: "32(c)",
      dv: "3P",
      mode: "SA/FA",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "3L",
    cost: 840,
    name: "Colt Cobra TZ-120",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
        {
          hook: "BARREL",
          item: "Gas-vent System",
          rating: 2,
        },
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
      ],
    },
    weapon: {
      ar: [10, 10, 7, 0, 0],
      ammo: "32(c)",
      dv: "3P",
      mode: "SA/FA",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "4L",
    cost: 925,
    name: "FN P93 Praetor",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
        {
          hook: "UNDER",
          item: "FN P93 Flashlight",
        },
      ],
    },
    weapon: {
      ar: [9, 12, 7, 0, 0],
      ammo: "50(c)",
      dv: "4P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "3L",
    cost: 825,
    name: "HK-227",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
        {
          hook: "BARREL",
          item: "Silencer",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      ar: [10, 11, 8, 0, 0],
      ammo: "28(c)",
      dv: "3P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "3L",
    cost: 750,
    name: "Ingram Smartgun XI",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
      accessorymod: [
        {
          hook: "BARREL",
          item: "Silencer",
        },
        {
          hook: "BARREL",
          item: "Gas-vent System",
          rating: 2,
        },
      ],
    },
    weapon: {
      ar: [11, 9, 6, 0, 0],
      ammo: "32(c)",
      dv: "3P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "3L",
    cost: 725,
    name: "SCK Model 100",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      ar: [10, 10, 7, 0, 0],
      ammo: "30(c)",
      dv: "3P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "2L",
    cost: 450,
    name: "Uzi IV",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SUBMACHINE GUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "STOCK",
        },
        {
          hook: "TOP",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Folding Stock",
        },
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [8, 8, 7, 0, 0],
      ammo: "24(c)",
      dv: "3P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "automatics",
    },
  },
  {
    availability: "2L",
    cost: 330,
    name: "Defiance T-250",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SHOTGUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [7, 10, 6, 0, 0],
      ammo: "5(m)",
      dv: "4P",
      mode: "SS/SA",
      skill: "Firearms",
      specialization: "shotguns",
    },
  },
  {
    availability: "2L",
    cost: 330,
    name: "Defiance T-250 Shortbarrel",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SHOTGUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [8, 8, 4, 0, 0],
      ammo: "5(m)",
      dv: "3P",
      mode: "SS/SA",
      skill: "Firearms",
      specialization: "shotguns",
    },
  },
  {
    availability: "4L",
    cost: 700,
    name: "Mossberg CMDT",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SHOTGUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [4, 11, 7, 0, 0],
      ammo: "10(c)/24(d)",
      dv: "4P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "shotguns",
    },
  },
  {
    availability: "5L",
    cost: 825,
    name: "PJSS Model 55",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SHOTGUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Shock Pad",
        },
      ],
    },
    weapon: {
      ar: [3, 12, 8, 0, 0],
      ammo: "2(b)",
      dv: "4P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "shotguns",
    },
  },
  {
    availability: "2L",
    cost: 325,
    name: "Remington Roomsweeper",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "SHOTGUNS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      ar: [9, 8, 4, 0, 0],
      ammo: "8(m)",
      dv: "5P",
      mode: "SA",
      skill: "Firearms",
      specialization: "shotguns",
    },
  },
  {
    availability: "3L",
    cost: 12000,
    name: "Remington 900",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE HUNTING",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Imaging Scope",
        },
      ],
    },
    weapon: {
      ar: [2, 7, 10, 12, 11],
      ammo: "5(m)",
      dv: "5P",
      mode: "SS",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "2L",
    cost: 11100,
    name: "Ruger 101",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE HUNTING",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Imaging Scope",
        },
        {
          hook: "STOCK",
          item: "Shock Pad",
        },
      ],
    },
    weapon: {
      ar: [2, 6, 10, 12, 11],
      ammo: "8(m)",
      dv: "5P",
      mode: "SA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "2L",
    cost: 2100,
    name: "Ak 97",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [4, 11, 9, 7, 1],
      ammo: "38(c)",
      dv: "5P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "5L",
    cost: 3400,
    name: "Ares Alpha",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "UNDER",
          item: "Ares Alpha Grenade Launcher",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
    },
    weapon: {
      ar: [4, 10, 9, 7, 2],
      ammo: "42(c)",
      dv: "4P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "2L",
    cost: 1500,
    name: "Colt M23",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "SIDE L",
        },
        {
          hook: "SIDE R",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [5, 8, 8, 8, 4],
      ammo: "40(c)",
      dv: "4P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "3L",
    cost: 2100,
    name: "FN Har",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "BARREL",
          item: "Gas-vent System",
          rating: 2,
        },
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
      ],
    },
    weapon: {
      ar: [3, 11, 10, 6, 1],
      ammo: "35(c)",
      dv: "5P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "5L",
    cost: 3200,
    name: "Yamaha Raiden",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
      accessorymod: [
        {
          hook: "BARREL",
          item: "Silencer",
        },
        {
          hook: "UNDER",
          item: "Yamaha Raiden Shotgun",
        },
        {
          hook: "UNDER",
          item: "Yamaha Raiden Launcher",
        },
      ],
    },
    weapon: {
      ar: [4, 11, 10, 7, 2],
      ammo: "60(c)",
      dv: "4P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "4I",
    cost: 11000,
    name: "Ares Desert Strike",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Imaging Scope",
        },
        {
          hook: "STOCK",
          item: "Shock Pad",
        },
      ],
    },
    weapon: {
      ar: [3, 10, 10, 10, 10],
      ammo: "14(c)",
      dv: "5P",
      mode: "SA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "5I",
    cost: 9050,
    name: "Cavalier Arms Crocket Ebr",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE SNIPER",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "TOP",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Imaging Scope",
        },
        {
          hook: "STOCK",
          item: "Shock Pad",
        },
      ],
    },
    weapon: {
      ar: [3, 8, 11, 8, 8],
      ammo: "20(c)",
      dv: "5P",
      mode: "SA/BF",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "5I",
    cost: 13200,
    name: "Ranger Arms SM-6",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE SNIPER",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "BARREL",
        },
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Imaging Scope",
        },
        {
          hook: "STOCK",
          item: "Shock Pad",
        },
        {
          hook: "BARREL",
          item: "Silencer",
        },
      ],
    },
    weapon: {
      ar: [3, 6, 9, 11, 12],
      ammo: "15(c)",
      dv: "5P",
      mode: "SA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "6I",
    cost: 15200,
    name: "Barret Model 122",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE SNIPER",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      moditemmod: {
        ref: "smartgun System Internal",
      },
      accessorymod: [
        {
          hook: "UNDER",
          item: "Bipod",
        },
        {
          hook: "BARREL",
          item: "Silencer",
        },
      ],
    },
    weapon: {
      ar: [1, 8, 11, 16, 14],
      ammo: "10(c)",
      dv: "6P",
      mode: "SA",
      skill: "Firearms",
      specialization: "rifles",
    },
  },
  {
    availability: "4L",
    cost: 4175,
    name: "Ingram Valiant",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "LMG",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "STOCK",
          item: "Shock Pad",
        },
        {
          hook: "TOP",
          item: "Laser Sight",
          included: true,
        },
        {
          hook: "BARREL",
          item: "Gas-vent System",
          rating: 2,
        },
      ],
    },
    weapon: {
      ar: [2, 11, 12, 7, 3],
      ammo: "50(c)/100(belt)",
      dv: "4P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "longarms",
    },
  },
  {
    availability: "4L",
    cost: 6900,
    name: "Stoner Ares M202",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "MMG",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [1, 10, 11, 7, 6],
      ammo: "50(c)/100(belt)",
      dv: "5P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "longarms",
    },
  },
  {
    availability: "5L",
    cost: 8000,
    name: "RPK HMG",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "HMG",
      },
      {
        subtype: "HMG",
        slot: "VEHICLE BODY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "UNDER",
          item: "Tripod",
        },
      ],
    },
    weapon: {
      ar: [1, 10, 12, 8, 7],
      ammo: "50(c)/100(belt)",
      dv: "6P",
      mode: "SA/BF/FA",
      skill: "Firearms",
      specialization: "longarms",
    },
  },
  {
    availability: "6I",
    cost: 10000,
    name: "Panther XXL",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "ASSAULT CANNON",
      },
    ],
    modifications: {
      moditemmod: {
        ref: "smartgun System Internal",
      },
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "BARREL",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [1, 9, 12, 8, 6],
      ammo: "15(c)",
      dv: "7P",
      mode: "SA",
      skill: "Firearms",
      specialization: "longarms",
    },
  },
  {
    availability: "3L",
    cost: 560,
    name: "Ares S3 Super Squirt",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
      {
        type: "WEAPON SPECIAL",
        subtype: "OTHER SPECIAL",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
    },
    weapon: {
      ar: [8, 12, 9, 0, 0],
      ammo: "20(c)",
      dv: "0P",
      mode: "SS",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "2",
    cost: 510,
    name: "Parashield DART Pistol",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
      {
        type: "WEAPON SPECIAL",
        subtype: "OTHER SPECIAL",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
      ],
    },
    weapon: {
      ar: [9, 10, 8, 0, 0],
      ammo: "5(c)",
      dv: "1P",
      mode: "SS",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "3",
    cost: 710,
    name: "Parashield DART Rifle",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE HUNTING",
      },
      {
        type: "WEAPON SPECIAL",
        subtype: "OTHER SPECIAL",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
      accessorymod: [
        {
          hook: "TOP",
          item: "Imaging Scope",
        },
      ],
    },
    weapon: {
      ar: [5, 8, 11, 3, 0],
      ammo: "6(m)",
      dv: "1P",
      mode: "SS",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "3I",
    cost: 5900,
    name: "Ares Antioch-2",
    useAs: [
      {
        type: "WEAPON SPECIAL",
        subtype: "LAUNCHERS",
      },
    ],
    modifications: {
      moditemmod: {
        ref: "smartgun System Internal",
      },
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
    },
    weapon: {
      ar: [0, 6, 8, 6, 5],
      ammo: "8(m)",
      dv: "0P",
      mode: "SS",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "4I",
    cost: 1800,
    name: "Armtech MGL6",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "PISTOLS HEAVY",
      },
      {
        type: "WEAPON SPECIAL",
        subtype: "LAUNCHERS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
    },
    weapon: {
      ar: [0, 8, 8, 3, 0],
      ammo: "12(c)",
      dv: "0P",
      mode: "SA",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "4I",
    cost: 5000,
    name: "Armtech MGL12",
    useAs: [
      {
        type: "WEAPON FIREARMS",
        subtype: "RIFLE ASSAULT",
      },
      {
        type: "WEAPON SPECIAL",
        subtype: "LAUNCHERS",
      },
      {
        subtype: "LAUNCHERS",
        slot: "VEHICLE BODY",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
        {
          hook: "STOCK",
        },
      ],
    },
    weapon: {
      ar: [0, 8, 9, 6, 2],
      ammo: "12(c)",
      dv: "0P",
      mode: "SA",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "5I",
    cost: 7000,
    name: "Aztechnology Striker",
    useAs: [
      {
        type: "WEAPON SPECIAL",
        subtype: "LAUNCHERS",
      },
    ],
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
    },
    weapon: {
      ar: [0, 4, 10, 9, 5],
      ammo: "1(ml)",
      dv: "0P",
      mode: "SS",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "5I",
    cost: 9000,
    name: "Onotari Interceptor",
    useAs: [
      {
        type: "WEAPON SPECIAL",
        subtype: "LAUNCHERS",
      },
    ],
    modifications: {
      moditemmod: {
        ref: "smartgun System Internal",
      },
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
    },
    weapon: {
      ar: [0, 5, 9, 10, 8],
      ammo: "2(ml)",
      dv: "0P",
      mode: "SS",
      skill: "Exotic Weapons",
    },
  },
  {
    availability: "0",
    cost: 0,
    name: "Cyberspace Designs Quadrotor Crossbow",
    modonly: true,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "CROSSBOWS",
      },
      {
        type: "ACCESSORY",
        subtype: "CROSSBOWS",
        slot: "VEHICLE WEAPON",
        capacity: 1,
      },
    ],
    requires: {
      itemreq: {
        item: "Weapon Mount Crossbow",
      },
    },
    weapon: {
      dv: "3P",
      ar: [2, 10, 4, 2, 0],
      ammo: "4(m)",
      mode: "SS",
      skill: "Engineering",
      specialization: "gunnery",
    },
    modifications: {
      itemhookmod: [
        {
          hook: "TOP",
        },
        {
          hook: "UNDER",
        },
      ],
    },
  },
]

export default firearms

export const mods: FirearmMod[] = [
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "UNDER",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Attack rating",
          val: 2,
        },
      ],
    },
    availability: "1",
    cost: 200,
    name: "Bipod",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "FIREARMS EXTERNAL",
      },
    ],
    requires: {
      itemsubtypereq: {
        type: "TASERS,HOLDOUTS,PISTOLS LIGHT,PISTOLS HEAVY,MACHINE PISTOLS",
      },
    },
    modifications: {
      itemattrmod: [
        {
          attr: "Concealability",
          val: 1,
        },
      ],
    },
    availability: "1",
    cost: 150,
    name: "Concealable Holster",
    type: "ACCESSORY",
    subtype: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "BARREL",
      },
    ],
    availability: "3",
    cost: 500,
    name: "Gas-Vent System",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "UNDER",
      },
      {
        type: "ACCESSORY",
        subtype: "CYBER LIMB ACCESSORY",
        cap: 8,
        slot: "CYBERLIMB IMPLANT",
      },
    ],
    availability: "3",
    cost: 1400,
    name: "Gyro Mount",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "FIREARMS EXTERNAL",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Concealability",
          val: 1,
        },
      ],
    },
    requires: {
      itemsubtypereq: {
        type: "TASERS,HOLDOUTS,PISTOLS LIGHT",
      },
    },
    availability: "2",
    cost: 350,
    name: "Hidden Arm Slide",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "TOP",
      },
    ],
    modifications: {
      itemhookmod: {
        capacity: 3,
        hook: "OPTICAL",
      },
      accessorymod: [
        {
          hook: "OPTICAL",
          item: "vision magnification",
          included: true,
        },
        {
          hook: "OPTICAL",
          item: "camera",
          included: true,
        },
      ],
    },
    availability: "1",
    cost: 350,
    name: "Imaging Scope",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "TOP",
      },
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "UNDER",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Attack rating",
          objVal: "1,1,1,1,1",
        },
      ],
    },
    availability: "1",
    cost: 125,
    name: "Laser Sight",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "TOP",
      },
    ],
    requires: {
      slotreq: {
        slot: "TOP",
      },
    },
    availability: "3",
    cost: 70,
    name: "Periscope",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "FIREARMS EXTERNAL",
      },
    ],
    requires: {
      itemsubtypereq: {
        type: "TASERS,HOLDOUTS,PISTOLS LIGHT,PISTOLS HEAVY,MACHINE PISTOLS",
      },
    },
    availability: "2",
    cost: 175,
    name: "Quick Draw Holster",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "STOCK",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Attack rating",
          val: 1,
          cond: true,
          condindex: 1,
        },
      ],
    },
    requires: {
      itemsubtypereq: {
        type: "SUBMACHINE GUNS,RIFLE ASSAULT,RIFLE HUNTING,RIFLE SNIPER,SHOTGUNS,LMG,MMG,HMG,ASSAULT CANNON",
      },
    },
    availability: "2",
    cost: 50,
    name: "Shock Pad",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "BARREL",
      },
    ],
    requires: {
      itemsubtypereq: {
        type: "TASERS,HOLDOUTS,PISTOLS LIGHT,PISTOLS HEAVY,MACHINE PISTOLS,SUBMACHINE GUNS,LMG,MMG,HMG,ASSAULT CANNON,RIFLE ASSAULT,RIFLE HUNTING,RIFLE SNIPER",
      },
      slotreq: {
        slot: "BARREL",
      },
    },
    availability: "4",
    cost: 500,
    name: "Silencer",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "UNDER",
      },
    ],
    requires: {
      slotreq: {
        slot: "UNDER",
      },
    },
    availability: "5",
    cost: 2500,
    name: "Smart Firing Platform",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Attack rating",
          val: 2,
          cond: true,
          condindex: 1,
        },
        {
          attr: "Attack rating",
          val: 1,
          cond: true,
          condindex: 2,
        },
      ],
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "1L",
    cost: 500,
    name: "Smartgun System",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "TOP",
      },
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "UNDER",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Attack rating",
          val: 2,
          cond: true,
          condindex: 1,
        },
        {
          attr: "Attack rating",
          val: 1,
          cond: true,
          condindex: 2,
        },
      ],
      itemhookmod: {
        capacity: 1,
        hook: "OPTICAL",
      },
    },
    availability: "2L",
    cost: 200,
    name: "Smartgun System External",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "FIREARMS EXTERNAL",
      },
    ],
    requires: {
      itemtypereq: {
        type: "WEAPON FIREARMS",
      },
    },
    availability: "2",
    cost: 5,
    name: "Spare Clip",
    type: "ACCESSORY",
    multi: true,
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "FIREARMS EXTERNAL",
      },
    ],
    requires: {
      itemtypereq: {
        type: "WEAPON FIREARMS",
      },
    },
    availability: "1",
    cost: 25,
    name: "Speed Loader",
    type: "ACCESSORY",
    multi: true,
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "STOCK",
      },
    ],
    modifications: {
      itemattrmod: [
        {
          attr: "Concealability",
          val: 1,
        },
      ],
    },
    availability: "2",
    cost: 30,
    name: "Folding Stock",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "UNDER",
      },
    ],
    availability: "2",
    cost: 500,
    name: "Tripod",
    type: "ACCESSORY",
  },
  {
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "FIREARMS ACCESSORY",
        slot: "STOCK",
      },
    ],
    availability: "0",
    cost: 0,
    name: "Removable Stock",
    type: "ACCESSORY",
  },
]
