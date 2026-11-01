import { GearWeapon } from "../types/Resources"

// complex types and JSON don't play nice.
const meleeWeapons: GearWeapon[] = [
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Combat Axe",
    availability: "4",
    cost: 500,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
      {
        type: "ACCESSORY",
        subtype: "INSTRUMENT WEAPON",
        slot: "INSTRUMENT WEAPON",
        capacity: 1,
        availability: "6",
        cost: 500,
      },
    ],
    weapon: {
      dv: "5P",
      ar: [9, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Combat Knife",
    availability: "2",
    cost: 220,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [8, 2, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Survival Knife",
    availability: "2",
    cost: 220,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [8, 2, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Forearm Snap Blades",
    availability: "3",
    cost: 185,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [6, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Knife",
    availability: "1",
    cost: 20,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
      {
        type: "ACCESSORY",
        subtype: "INSTRUMENT WEAPON",
        slot: "INSTRUMENT WEAPON",
        capacity: 1,
        availability: "3",
        cost: 20,
      },
    ],
    weapon: {
      dv: "2P",
      ar: [6, 1, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Katana",
    availability: "3",
    cost: 350,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
      {
        type: "ACCESSORY",
        subtype: "INSTRUMENT WEAPON",
        slot: "INSTRUMENT WEAPON",
        capacity: 1,
        availability: "5",
        cost: 350,
      },
    ],
    weapon: {
      dv: "4P",
      ar: [10, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Polearm",
    availability: "2",
    cost: 210,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
    ],
    weapon: {
      dv: "4P",
      ar: [8, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Sword",
    availability: "3",
    cost: 320,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "BLADES",
      },
      {
        type: "ACCESSORY",
        subtype: "INSTRUMENT WEAPON",
        slot: "INSTRUMENT WEAPON",
        capacity: 1,
        availability: "5",
        cost: 320,
      },
    ],
    weapon: {
      dv: "3P",
      ar: [9, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Blades",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "CLUBS",
    name: "Club",
    availability: "1",
    cost: 65,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "CLUBS",
      },
    ],
    weapon: {
      dv: "3S",
      ar: [6, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Clubs",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "CLUBS",
    name: "Extendable Baton",
    availability: "2",
    cost: 50,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "CLUBS",
      },
    ],
    weapon: {
      dv: "2S",
      ar: [5, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Clubs",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "CLUBS",
    name: "Sab",
    availability: "1",
    cost: 75,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "CLUBS",
      },
    ],
    weapon: {
      dv: "2S",
      ar: [6, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Clubs",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "CLUBS",
    name: "Staff",
    availability: "1",
    cost: 150,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "CLUBS",
      },
    ],
    weapon: {
      dv: "4S",
      ar: [8, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Clubs",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "CLUBS",
    name: "Stun Baton",
    availability: "2",
    cost: 600,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "CLUBS",
      },
      {
        type: "ACCESSORY",
        subtype: "INSTRUMENT WEAPON",
        slot: "INSTRUMENT WEAPON",
        capacity: 1,
        availability: "4",
        cost: 600,
      },
    ],
    weapon: {
      dv: "5S(e)",
      ar: [6, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Clubs",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "CLUBS",
    name: "Telescopic Staff",
    availability: "2",
    cost: 250,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "CLUBS",
      },
    ],
    weapon: {
      dv: "4S",
      ar: [8, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Clubs",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "UNARMED",
    name: "Bike Chain",
    availability: "1",
    cost: 15,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "UNARMED",
      },
    ],
    weapon: {
      dv: "2S",
      ar: [5, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Unarmed",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "WHIPS",
    name: "Bullwhip",
    availability: "4",
    cost: 255,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "WHIPS",
      },
    ],
    weapon: {
      dv: "1P",
      ar: [6, 0, 0, 0, 0],
      skill: "Exotic Weapons",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "UNARMED",
    name: "Knucks",
    availability: "1",
    cost: 100,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "UNARMED",
      },
    ],
    weapon: {
      dv: "3P",
      ar: [5, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Unarmed",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "UNARMED",
    name: "Shock Gloves",
    availability: "4",
    cost: 790,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "UNARMED",
      },
    ],
    weapon: {
      dv: "4S(e)",
      ar: [5, 0, 0, 0, 0],
      skill: "Close Combat",
      specialization: "Unarmed",
    },
  },
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "WHIPS",
    name: "Monofilament Whip",
    availability: "6I",
    cost: 1300,
    reference: [{ book: "SR6", page: 249 }],
    useAs: [
      {
        type: "WEAPON CLOSE COMBAT",
        subtype: "WHIPS",
      },
      {
        type: "ACCESSORY",
        subtype: "INSTRUMENT WEAPON",
        slot: "INSTRUMENT WEAPON",
        capacity: 1,
        availability: "8I",
        cost: 1300,
      },
    ],
    weapon: {
      dv: "6P",
      ar: [14, 0, 0, 0, 0],
      skill: "Exotic Weapons",
    },
  },
]

export default meleeWeapons
