import { GearArmor } from "@/types/Resources"

const armorData: GearArmor[] = [
  {
    availability: "1",
    cost: 10,
    name: "clothing_street",
    subtype: "ARMOR_CLOTHES",
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
    name: "clothing_squatter",
    subtype: "ARMOR_CLOTHES",
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
    name: "clothing_low",
    subtype: "ARMOR_CLOTHES",
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
    name: "clothing_middle",
    subtype: "ARMOR_CLOTHES",
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
    name: "clothing_high",
    subtype: "ARMOR_CLOTHES",
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
    name: "clothing_luxury",
    subtype: "ARMOR_CLOTHES",
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
    name: "synthleather_jacket",
    availability: "1",
    cost: 300,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "actioneer_business",
    availability: "2",
    cost: 1500,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_SOCIAL",
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
    name: "armor_clothing",
    availability: "2",
    cost: 500,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_SOCIAL",
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
    name: "armor_jacket",
    availability: "2",
    cost: 1000,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "armor_vest",
    availability: "4",
    cost: 750,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "chameleon_suit",
    availability: "4I",
    cost: 2000,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "full_body_armor",
    availability: "4L",
    cost: 2000,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "full_body_armor_helmet",
    availability: "0",
    cost: 500,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_HELMET",
    },
    armor: {
      rating: 2,
      social: -4,
    },
    modifications: {
      itemhookmod: {
        capacity: 6,
        hook: "HELMET_ACCESSORY",
      },
    },
  },
  {
    name: "lined_coat",
    availability: "4",
    cost: 900,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "urban_explorer_jumpsuit",
    availability: "2",
    cost: 800,
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_BODY",
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
    name: "helmet",
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_HELMET",
    },
    armor: {
      rating: 1,
      social: -4,
      add: true,
    },
    modifications: {
      itemhookmod: {
        capacity: 4,
        hook: "HELMET_ACCESSORY",
      },
    },
  },
  {
    availability: "4",
    cost: 900,
    name: "ballistic_shield",
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_SHIELD",
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
        item: "ballistic_shield_weapon",
      },
    },
  },
  {
    availability: "4",
    cost: 1200,
    name: "riot_shield",
    useAs: {
      type: "ARMOR",
      subtype: "ARMOR_SHIELD",
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
        item: "riot_shield_weapon",
      },
    },
  },
]

export default armorData
