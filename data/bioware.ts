import { GearBioware } from "@/types/Resources"

export const bioware: GearBioware[] = [
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.75",
    },
    modifications: {
      attrmod: [
        {
          attribute: "AGILITY",
          value: 1,
          type: "AUGMENTED",
          cond: true,
          condIndex: 1,
        },
        {
          attribute: "REACTION",
          value: 1,
          type: "AUGMENTED",
          cond: true,
          condIndex: 1,
        },
        {
          attribute: "STRENGTH",
          value: 1,
          type: "AUGMENTED",
          cond: true,
          condIndex: 1,
        },
        {
          attribute: "WILLPOWER",
          value: 1,
          type: "AUGMENTED",
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Adrenaline Pump",
    availability: "5I",
    cost: 55000,
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.3",
    },
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 1,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 1,
        },
        {
          attribute: "ATTACK RATING",
          value: 1,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    name: "Bone Density Augmentation 1",
    availability: "4L",
    cost: 5000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.6",
    },
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 2,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 1,
        },
        {
          attribute: "ATTACK RATING",
          value: 2,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    name: "Bone Density Augmentation 2",
    availability: "4L",
    cost: 10000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.9",
    },
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 3,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 2,
        },
        {
          attribute: "ATTACK RATING",
          value: 2,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    name: "Bone Density Augmentation 3",
    availability: "4L",
    cost: 15000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "1.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "DAMAGE RESISTANCE",
          value: 4,
        },
        {
          attribute: "MELEE DAMAGE",
          value: 2,
        },
        {
          attribute: "ATTACK RATING",
          value: 3,
        },
      ],
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    name: "Bone Density Augmentation 4",
    availability: "4L",
    cost: 20000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.1",
    },
    modifications: {
      qualitymod: {
        ref: "low-light vision",
      },
    },
    name: "Cats Eyes",
    availability: "3",
    cost: 4000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "AGILITY",
          value: 1,
        },
      ],
      edgemod: [
        {
          type: "BONUS",
          skill: "athletics",
        },
      ],
    },
    name: "Enhanced Articulation",
    availability: "4",
    cost: 30000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "STRENGTH",
          value: 1,
        },
      ],
    },
    name: "Muscle Augmentation",
    availability: "4L",
    cost: 31000,
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "AGILITY",
          value: 1,
        },
      ],
    },
    name: "Muscle Toner",
    availability: "4L",
    cost: 32000,
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.25",
    },
    modifications: {
      itemmod: [
        {
          item: "orthoskin armor",
          rating: 1,
        },
        {
          item: "dermal deposits armor",
          remove: true,
        },
      ],
    },
    name: "Orthoskin",
    availability: "4L",
    cost: 6000,
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost defenseRating",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    name: "Platelet Factories",
    availability: "4",
    cost: 17000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.1",
    },
    name: "Skin Pocket",
    availability: "4",
    cost: 12000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.7",
    },
    modifications: {
      attrmod: [
        {
          attribute: "STRENGTH",
          value: 1,
        },
        {
          attribute: "AGILITY",
          value: 1,
        },
        {
          attribute: "REACTION",
          value: 1,
        },
        {
          attribute: "BODY",
          value: 1,
        },
      ],
      lifecostmod: {
        percent: 25,
      },
    },
    name: "Suprathyroid Gland",
    availability: "5L",
    cost: 140000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "HEALING",
          value: 1,
        },
      ],
    },
    name: "Symbiotes",
    availability: "4",
    cost: 3500,
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  // {
  //   useAs: {
  //     type: "BIOLOGY",
  //     subtype: "BIOTECH",
  //   },
  //   name: "Symbiote Food",
  //   availability: "4",
  //   cost: 200,
  //   maxRating: 4,
  //   rating: true,
  //   rateMultiplier: "cost",
  //   count: "y",
  // },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.1",
    },
    modifications: {
      skillmod: [
        {
          ref: "athletics",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Synthacardium",
    availability: "3",
    cost: 30000,
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    modifications: {
      skillmod: [
        {
          ref: "con",
          val: 1,
          cond: true,
          condIndex: 1,
          //  modType: "NATURAL",
        },
        {
          ref: "influence",
          val: 1,
          cond: true,
          condIndex: 1,
          //  modType: "NATURAL",
        },
      ],
    },
    name: "Tailored Pheremones",
    availability: "4L",
    cost: 31000,
    maxRating: 4,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "TOXIN RESISTANCE THRESHOLD",
          value: 1,
        },
      ],
    },
    name: "Toxin Etractor",
    availability: "4",
    cost: 4800,
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE STANDARD",
      essence: "0.1",
    },
    modifications: {
      attrmod: [
        {
          attribute: "TOXIN RESISTANCE POOL",
          value: 1,
        },
      ],
    },
    name: "Tracheal Filter",
    availability: "4",
    cost: 4500,
    maxRating: 6,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.2",
    },
    modifications: {
      attrmod: [
        {
          attribute: "LOGIC",
          value: 1,
        },
      ],
    },
    name: "Cerebral Booster",
    availability: "5",
    cost: 31500,
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.1",
    },
    name: "Damage Compensator",
    availability: "5L",
    cost: 2000,
    maxRating: 12,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.1",
    },
    modifications: {
      relevancemod: {
        topic: "SOCIAL",
      },
    },
    name: "Mnemonic Enhancer",
    availability: "5",
    cost: 9000,
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.3",
    },
    modifications: {
      attrmod: [
        {
          attribute: "WILLPOWER",
          value: 1,
          cond: true,
          condIndex: 1,
        },
        {
          attribute: "INTUITION",
          value: -1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Pain Editor",
    availability: "5I",
    cost: 48000,
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.1",
    },
    modifications: {
      // skillmod: [
      //   {
      //     val: 1,
      //     //  modType: "AUGMENTED",
      //   },
      // ],
    },
    name: "Reflex Recorder",
    availability: "5",
    cost: 14000,
    choice: "PHYSICAL SKILL",
  },
  {
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.1",
    },
    name: "Sleep Regulator",
    availability: "5",
    cost: 12000,
    subtype: "BIOWARE CULTURED",
    type: "BIOWARE",
  },
  {
    modifications: {
      attrmod: [
        {
          attribute: "REACTION",
          value: 1,
        },
        {
          attribute: "INITIATIVE DICE PHYSICAL",
          value: 1,
        },
      ],
    },
    useAs: {
      type: "BIOWARE",
      subtype: "BIOWARE CULTURED",
      essence: "0.5",
    },
    name: "Synaptic Booster",
    availability: "5L",
    cost: 95000,
    maxRating: 3,
    rating: true,
    rateMultiplier: "essence cost modifier",
  },
]
