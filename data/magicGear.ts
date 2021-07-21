import { Gear, GearFocus, GearTyped } from "@/types/Resources"

export const foci: GearFocus[] = [
  {
    modifications: {
      skillmod: [
        {
          ref: "enchanting",
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Alchemical Focus",
    karma: 3,
    rating: true,
    cost: 5000,
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "enchanting",
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Disenchanting Focus",
    karma: 3,
    rating: true,
    cost: 5000,
    availability: "1L",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MAGICAL",
      },
    },
    name: "Centering Focus",
    karma: 3,
    rating: true,
    cost: 9000,
    availability: "1L",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MAGICAL",
      },
    },
    name: "Flexible Signature Focus",
    karma: 3,
    rating: true,
    cost: 9000,
    availability: "1L",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MAGICAL",
      },
    },
    name: "Masking Focus",
    karma: 3,
    rating: true,
    cost: 9000,
    availability: "1L",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MAGICAL",
      },
    },
    name: "Spell Shaping Focus",
    karma: 3,
    rating: true,
    cost: 9000,
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "sorcery",
          val: 1,
        },
        {
          ref: "conjuring",
          val: 1,
        },
      ],
    },
    name: "Power Focus",
    karma: 6,
    rating: true,
    cost: 18000,
    availability: "3L",
  },
  {
    modifications: {
      powermod: "",
    },
    name: "Qi Focus",
    karma: 2,
    rating: true,
    cost: 3000,
    choice: "ADEPT_POWER",
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "sorcery",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Counterspelling Focus",
    karma: 2,
    rating: true,
    cost: 4000,
    choice: "SPELL_CATEGORY",
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "sorcery",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Spellcasting Focus",
    karma: 2,
    rating: true,
    cost: 4000,
    choice: "SPELL_CATEGORY",
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "sorcery",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Ritualspellcasting Focus",
    karma: 2,
    rating: true,
    cost: 4000,
    choice: "SPELL_CATEGORY",
    availability: "1L",
  },
  {
    modifications: {},
    name: "Sustaining Focus",
    karma: 2,
    rating: true,
    cost: 4000,
    choice: "SPELL_CATEGORY",
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "conjuring",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Summoning Focus",
    karma: 2,
    rating: true,
    cost: 4000,
    choice: "SPIRIT",
    availability: "1L",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "conjuring",
          val: 1,
          cond: true,
          condIndex: 1,
        },
      ],
    },
    name: "Banishing Focus",
    karma: 2,
    rating: true,
    cost: 4000,
    choice: "SPIRIT",
    availability: "1L",
  },
  {
    name: "Weapon Focus",
    karma: 3,
    rating: true,
    cost: 7000,
    choice: "MELEE_WEAPON",
    availability: "3L",
  },
]

export const magicSupplies: GearTyped[] = [
  {
    name: "Magical Lodge Materials",
    availability: "1",
    cost: 500,
    maxRating: 24,
    rating: true,
    rateMultiplier: "cost avail",
    type: "MAGICAL",
    subtype: "MAGICAL_SUPPLIES",
    count: true,
  },
  {
    name: "Reagents per dram",
    availability: "2",
    cost: 50,
    type: "MAGICAL",
    subtype: "MAGICAL_SUPPLIES",
    count: true,
  },
]

export const spellFormula: Gear[] = [
  {
    name: "Combat Formula",
    availability: "3L",
    cost: 2000,
  },
  {
    name: "Detection Formula",
    availability: "2L",
    cost: 500,
  },
  {
    name: "Health Formula",
    availability: "2L",
    cost: 500,
  },
  {
    name: "Illusion Formula",
    availability: "3L",
    cost: 1000,
  },
  {
    name: "Manipulation Formula",
    availability: "3L",
    cost: 1500,
  },
]

export const focusFormula: GearTyped[] = [
  {
    name: "Enchanting focus formula",
    availability: "1L",
    cost: 1250,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Metamagic focus formula",
    availability: "1L",
    cost: 2250,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Power focus formula",
    availability: "3L",
    cost: 4500,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Qi focus formula",
    availability: "1L",
    cost: 750,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Spell focus formula",
    availability: "1L",
    cost: 1000,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Spirit focus formula",
    availability: "1L",
    cost: 1000,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
  {
    name: "Weapon focus formula",
    availability: "3L",
    cost: 1750,
    type: "formula",
    subtype: "focus formula",
    rating: true,
    rateMultiplier: "cost avail",
  },
]
