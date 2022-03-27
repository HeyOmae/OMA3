import { ArmorMod, GearArmor } from "@/types/Resources"

const armorData: GearArmor[] = [
  {
    availability: "1",
    cost: 10,
    name: "Clothing Street",
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    modonly: true,
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 0,
        hook: "ARMOR",
      },
    },
  },
  {
    availability: "1",
    cost: 10,
    name: "Clothing Squatter",
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 0,
        hook: "ARMOR",
      },
    },
  },
  {
    availability: "1",
    cost: 100,
    name: "Clothing Low",
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 0,
        hook: "ARMOR",
      },
    },
  },
  {
    availability: "1",
    cost: 1000,
    name: "Clothing Middle",
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 0,
        hook: "ARMOR",
      },
    },
  },
  {
    availability: "1",
    cost: 5000,
    name: "Clothing High",
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 0,
        hook: "ARMOR",
      },
    },
  },
  {
    availability: "1",
    cost: 10000,
    name: "Clothing Luxury",
    subtype: "ARMOR CLOTHES",
    type: "ARMOR",
    armor: {
      rating: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 0,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Synthleather Jacket",
    availability: "1",
    cost: 300,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 1,
      social: -2,
    },
    modifications: {
      itemhookmod: {
        capacity: 3,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Actioneer Business",
    availability: "2",
    cost: 1500,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR SOCIAL",
    },
    armor: {
      rating: 2,
      social: +2,
    },
    modifications: {
      itemhookmod: {
        capacity: 6,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Armor Clothing",
    availability: "2",
    cost: 500,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR SOCIAL",
    },
    armor: {
      rating: 2,
      social: 0,
    },
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Armor Jacket",
    availability: "2",
    cost: 1000,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 4,
      social: -3,
    },
    modifications: {
      itemhookmod: {
        capacity: 8,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Armor Vest",
    availability: "4",
    cost: 750,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 3,
      social: -1,
    },
    modifications: {
      itemhookmod: {
        capacity: 6,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Chameleon Suit",
    availability: "4I",
    cost: 2000,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 2,
      social: -3,
    },
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Full Body Armor",
    availability: "4L",
    cost: 2000,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 5,
      social: -5,
    },
    modifications: {
      itemhookmod: {
        capacity: 10,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Full Body Armor Helmet",
    availability: "0",
    cost: 500,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR HELMET",
    },
    armor: {
      rating: 2,
      social: -4,
    },
    modifications: {
      itemhookmod: {
        capacity: 6,
        hook: "HELMET ACCESSORY",
      },
    },
  },
  {
    name: "Lined Coat",
    availability: "4",
    cost: 900,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 3,
      social: -2,
    },
    modifications: {
      itemhookmod: {
        capacity: 7,
        hook: "ARMOR",
      },
    },
  },
  {
    name: "Urban Explorer Jumpsuit",
    availability: "2",
    cost: 800,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR BODY",
    },
    armor: {
      rating: 3,
      social: -2,
    },
    modifications: {
      itemhookmod: {
        capacity: 6,
        hook: "ARMOR",
      },
    },
  },
  {
    availability: "1",
    cost: 200,
    name: "Helmet",
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR HELMET",
    },
    armor: {
      rating: 1,
      social: -4,
      add: true,
    },
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "HELMET ACCESSORY",
      },
    },
  },
  {
    availability: "4",
    cost: 900,
    name: "Ballistic Shield",
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR SHIELD",
    },
    armor: {
      rating: 2,
    },
    modifications: {
      itemhookmod: {
        capacity: 2,
        hook: "ARMOR",
      },
      itemmod: {
        item: "Ballistic Shield Weapon",
      },
    },
  },
  {
    availability: "4",
    cost: 1200,
    name: "Riot Shield",
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR SHIELD",
    },
    armor: {
      rating: 2,
    },
    modifications: {
      itemhookmod: {
        capacity: 2,
        hook: "ARMOR",
      },
      itemmod: {
        item: "Riot Shield Weapon",
      },
    },
  },
]

export const mods: ArmorMod[] = [
  {
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
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
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
  },
  {
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
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
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
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
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
    rating: true,
    rateMultiplier: "capacity cost",
  },
  {
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
  },
  {
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
  },
]

export default armorData
