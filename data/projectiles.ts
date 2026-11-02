import { GearProjectile } from "../types/Resources"

const projectiles: GearProjectile[] = [
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow1",
    reference: [{ book: "SR6", page: 250 }],
    availability: "1L",
    cost: 110,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "1P",
      ar: [1, 1, 0, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 1,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow2",
    reference: [{ book: "SR6", page: 250 }],
    availability: "1L",
    cost: 120,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "1P",
      ar: [1, 2, 1, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 2,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow3",
    reference: [{ book: "SR6", page: 250 }],
    availability: "1L",
    cost: 130,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [2, 3, 1, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 3,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow4",
    reference: [{ book: "SR6", page: 250 }],
    availability: "1L",
    cost: 140,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [2, 4, 1, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 4,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow5",
    reference: [{ book: "SR6", page: 250 }],
    availability: "2L",
    cost: 150,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [3, 5, 1, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 5,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow6",
    reference: [{ book: "SR6", page: 250 }],
    availability: "2L",
    cost: 160,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [3, 6, 2, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 6,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow7",
    reference: [{ book: "SR6", page: 250 }],
    availability: "2L",
    cost: 170,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "4P",
      ar: [4, 7, 2, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 7,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow8",
    reference: [{ book: "SR6", page: 250 }],
    availability: "3L",
    cost: 180,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "4P",
      ar: [4, 8, 2, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 8,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow9",
    reference: [{ book: "SR6", page: 250 }],
    availability: "3L",
    cost: 190,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "5P",
      ar: [5, 9, 2, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 9,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow10",
    reference: [{ book: "SR6", page: 250 }],
    availability: "3L",
    cost: 200,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "5P",
      ar: [5, 10, 3, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 10,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow11",
    reference: [{ book: "SR6", page: 250 }],
    availability: "4L",
    cost: 210,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "6P",
      ar: [6, 11, 3, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 11,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow12",
    reference: [{ book: "SR6", page: 250 }],
    availability: "4L",
    cost: 220,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "6P",
      ar: [6, 11, 3, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 12,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow13",
    reference: [{ book: "SR6", page: 250 }],
    availability: "4L",
    cost: 230,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "7P",
      ar: [7, 13, 3, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 13,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "BOWS",
    name: "Bow14",
    reference: [{ book: "SR6", page: 250 }],
    availability: "5L",
    cost: 240,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "BOWS",
      },
    ],
    weapon: {
      dv: "7P",
      ar: [7, 14, 4, 0, 0],
      skill: "Athletics",
      specialization: "Archery",
    },
    requires: {
      attrreq: {
        attribute: "STRENGTH",
        value: 14,
      },
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
  {
    type: "WEAPON RANGED",
    subtype: "CROSSBOWS",
    name: "Crossbow Light",
    reference: [{ book: "SR6", page: 250 }],
    availability: "3",
    cost: 150,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "CROSSBOWS",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [6, 8, 2, 0, 0],
      ammo: "4(m)",
      mode: "SS",
      skill: "Athletics",
      specialization: "Archery",
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
  {
    type: "WEAPON RANGED",
    subtype: "CROSSBOWS",
    name: "Crossbow Standard",
    reference: [{ book: "SR6", page: 250 }],
    availability: "3L",
    cost: 290,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "CROSSBOWS",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [2, 10, 4, 2, 0],
      ammo: "4(m)",
      mode: "SS",
      skill: "Athletics",
      specialization: "Archery",
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
  {
    type: "WEAPON RANGED",
    subtype: "CROSSBOWS",
    name: "Crossbow Heavy",
    reference: [{ book: "SR6", page: 250 }],
    availability: "4L",
    cost: 425,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "CROSSBOWS",
      },
    ],
    weapon: {
      dv: "4P",
      ar: [2, 8, 6, 4, 0],
      ammo: "4(m)",
      mode: "SS",
      skill: "Athletics",
      specialization: "Archery",
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
  {
    type: "WEAPON RANGED",
    subtype: "THROWING",
    name: "Throwing Knives",
    reference: [{ book: "SR6", page: 250 }],
    availability: "2",
    cost: 155,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "THROWING",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [10, 9, 3, 0, 0],
      skill: "Athletics",
      specialization: "Throwing",
    },
  },
  {
    type: "WEAPON RANGED",
    subtype: "THROWING",
    name: "Throwing Stars",
    reference: [{ book: "SR6", page: 250 }],
    availability: "2",
    cost: 160,
    useAs: [
      {
        type: "WEAPON RANGED",
        subtype: "THROWING",
      },
    ],
    weapon: {
      dv: "2P",
      ar: [9, 11, 4, 0, 0],
      skill: "Athletics",
      specialization: "Throwing",
    },
  },
]

export default projectiles
