import { GearWeaponMelee } from "../types/Resources"

// complex types and JSON don't play nice.
const meleeWeapons: GearWeaponMelee[] = [
  {
    name: "Combat Axe",
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
    name: "Combat Knife",
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
    name: "Survival Knife",
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
    name: "Forearm Snap Blades",
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
    name: "Knife",
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
    name: "Katana",
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
    name: "Polearm",
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
    name: "Sword",
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
    name: "Club",
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
    name: "Extendable Baton",
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
    name: "Sab",
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
    name: "Staff",
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
    name: "Stun Baton",
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
    name: "Telescopic Staff",
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
    name: "Bike Chain",
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
    name: "Bullwhip",
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
    name: "Knucks",
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
    name: "Shock Gloves",
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
    name: "Monofilament Whip",
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
