import { GearWeapon } from "../types/Resources"

// complex types and JSON don't play nice.
const meleeWeapons: GearWeapon[] = [
  {
    type: "WEAPON CLOSE COMBAT",
    subtype: "BLADES",
    name: "Combat Axe",
    reference: [{ book: "SR6 Berlin", page: 247 }],
    availability: "4",
    cost: 500,
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
    reference: [{ book: "SR6 Berlin", page: 247 }],
    availability: "2",
    cost: 220,
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
    reference: [{ book: "SR6 Berlin", page: 248 }],
    availability: "2",
    cost: 220,
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
    reference: [{ book: "SR6 Berlin", page: 247 }],
    availability: "3",
    cost: 185,
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
    reference: [{ book: "SR6 Berlin", page: 247 }],
    availability: "1",
    cost: 20,
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
    reference: [{ book: "SR6 Berlin", page: 247 }],
    availability: "3",
    cost: 350,
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
    reference: [{ book: "SR6 Berlin", page: 247 }],
    availability: "2",
    cost: 210,
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
    reference: [{ book: "SR6 Berlin", page: 248 }],
    availability: "3",
    cost: 320,
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
    reference: [{ book: "SR6 Berlin", page: 248 }],
    availability: "1",
    cost: 65,
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
    reference: [{ book: "SR6 Berlin", page: 248 }],
    availability: "2",
    cost: 50,
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
    reference: [{ book: "SR6 Berlin", page: 248 }],
    availability: "1",
    cost: 75,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "1",
    cost: 150,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "2",
    cost: 600,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "2",
    cost: 250,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "1",
    cost: 15,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "4",
    cost: 255,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "1",
    cost: 100,
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
    reference: [{ book: "SR6 Berlin", page: 250 }],
    availability: "4",
    cost: 790,
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
    reference: [{ book: "SR6 Berlin", page: 249 }],
    availability: "6I",
    cost: 1300,
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
