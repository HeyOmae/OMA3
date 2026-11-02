import type { Gear, GearArmor } from "@/types/Resources"

const armorData: GearArmor[] = [
  {
    availability: "1",
    cost: 10,
    name: "Clothing Street",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    modonly: true,
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 0,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    availability: "1",
    cost: 10,
    name: "Clothing Squatter",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 0,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    availability: "1",
    cost: 100,
    name: "Clothing Low",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 0,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    availability: "1",
    cost: 1000,
    name: "Clothing Middle",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 0,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    availability: "1",
    cost: 5000,
    name: "Clothing High",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 0,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    availability: "1",
    cost: 10000,
    name: "Clothing Luxury",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 0,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Synthleather Jacket",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    availability: "1",
    cost: 300,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 1,
      social: -2,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 3,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR SOCIAL",
    name: "Actioneer Business",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "2",
    cost: 1500,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR SOCIAL",
      },
    ],
    armor: {
      rating: 2,
      social: +2,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 6,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR SOCIAL",
    name: "Armor Clothing",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    availability: "2",
    cost: 500,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR SOCIAL",
      },
    ],
    armor: {
      rating: 2,
      social: 0,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Armor Jacket",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    availability: "2",
    cost: 1000,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 4,
      social: -3,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 8,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Armor Vest",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "4",
    cost: 750,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 3,
      social: -1,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 6,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Chameleon Suit",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "4I",
    cost: 2000,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 2,
      social: -3,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Full Body Armor",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "4L",
    cost: 2000,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 5,
      social: -5,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 10,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR HELMET",
    name: "Full Body Armor Helmet",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "0",
    cost: 500,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR HELMET",
      },
    ],
    armor: {
      rating: 2,
      social: -4,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 6,
          hook: "HELMET ACCESSORY",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Lined Coat",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "4",
    cost: 900,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 3,
      social: -2,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 7,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR BODY",
    name: "Urban Explorer Jumpsuit",
    reference: [{ book: "SR6 Berlin", page: 265 }],
    availability: "2",
    cost: 800,
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR BODY",
      },
    ],
    armor: {
      rating: 3,
      social: -2,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 6,
          hook: "ARMOR",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR HELMET",
    availability: "1",
    cost: 200,
    name: "Helmet",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR HELMET",
      },
    ],
    armor: {
      rating: 1,
      social: -4,
      add: true,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 4,
          hook: "HELMET ACCESSORY",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR SHIELD",
    availability: "4",
    cost: 900,
    name: "Ballistic Shield",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR SHIELD",
      },
    ],
    armor: {
      rating: 2,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 2,
          hook: "ARMOR",
        },
      ],
      itemmod: [
        {
          item: "Ballistic Shield Weapon",
        },
      ],
    },
  },
  {
    type: "ARMOR",
    subtype: "ARMOR SHIELD",
    availability: "4",
    cost: 1200,
    name: "Riot Shield",
    reference: [{ book: "SR6 Berlin", page: 267 }],
    useAs: [
      {
        type: "ARMOR",
        subtype: "ARMOR SHIELD",
      },
    ],
    armor: {
      rating: 2,
    },
    modifications: {
      itemhookmod: [
        {
          capacity: 2,
          hook: "ARMOR",
        },
      ],
      itemmod: [
        {
          item: "Riot Shield Weapon",
        },
      ],
    },
  },
]

export const mods: Gear[] = [
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 1,
      },
    ],
    availability: "3",
    cost: 250,
    name: "Chemical Protection",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 6,
      },
    ],
    requires: {
      itemreq: {
        item: "full body armor with helmet",
      },
    },
    availability: "5",
    cost: 3000,
    name: "Chemical Seal",
    reference: [{ book: "SR6 Berlin", page: 266 }],
  },
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 1,
      },
    ],
    availability: "3",
    cost: 250,
    name: "Cold Resistance",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 1,
      },
    ],
    availability: "3",
    cost: 250,
    name: "Fire Resistance",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 1,
      },
    ],
    availability: "3",
    cost: 250,
    name: "Electricity Resistance",
    reference: [{ book: "SR6 Berlin", page: 266 }],
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 0,
      },
    ],
    availability: "1",
    cost: 75,
    name: "Electrochromic Feature",
    reference: [{ book: "SR6 Berlin", page: 265 }],
  },
  {
    type: "ACCESSORY",
    subtype: "ARMOR BODY",
    useAs: [
      {
        type: "ACCESSORY",
        subtype: "ARMOR BODY",
        slot: "ARMOR",
        capacity: 0,
      },
    ],
    availability: "2",
    cost: 150,
    name: "Feedback Feature",
    reference: [{ book: "SR6 Berlin", page: 265 }],
  },
]

export default armorData
