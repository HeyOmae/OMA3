import { GearFocus } from "@/types/Resources"

// Max rating should probably be max magic,
// But this is easier for right now
// TODO: probably make this max magic
const maxRating = 7

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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
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
    maxRating,
    cost: 4000,
    choice: "SPELL_CATEGORY",
    availability: "1L",
  },
  {
    modifications: {},
    name: "Sustaining Focus",
    karma: 2,
    rating: true,
    maxRating,
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
    maxRating,
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
    maxRating,
    cost: 4000,
    choice: "SPIRIT",
    availability: "1L",
  },
  {
    name: "Weapon Focus",
    karma: 3,
    rating: true,
    maxRating,
    cost: 7000,
    choice: "MELEE_WEAPON",
    availability: "3L",
  },
]
