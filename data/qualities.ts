import { Quality } from "@/types/Qualities"

export const positive: Quality[] = [
  {
    modifications: {
      relevancemod: {
        topic: "COMBAT",
      },
    },
    name: "Ambidextrous",
    karma: 4,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "biotech",
          type: "BONUS",
        },
        {
          skill: "cracking",
          type: "BONUS",
        },
        {
          skill: "electronics",
          type: "BONUS",
        },
        {
          skill: "engineering",
          type: "BONUS",
        },
      ],
    },
    name: "Analytical Mind",
    karma: 3,
    type: "POSITIVE",
  },
  {
    modifications: {
      skillmod: {
        val: 1,
        modType: "MAX",
      },
    },
    name: "Aptitude",
    karma: 12,
    type: "POSITIVE",
    select: "SKILL",
  },
  {
    name: "Astral Chameleon",
    karma: 9,
    type: "POSITIVE",
  },
  {
    name: "Blandness",
    karma: 8,
    type: "POSITIVE",
  },
  {
    modifications: {
      attrmod: {
        attr: "PHYSICAL MONITOR",
        val: 1,
        type: "AUGMENTED",
      },
    },
    name: "Built Tough",
    karma: 4,
    type: "POSITIVE",
    max: 4,
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "athletics",
          type: "BONUS",
        },
      ],
    },
    name: "Catlike",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      itemmod: {
        item: "dermal deposits armor",
      },
      dmgtypemod: {
        type: "PHYSICAL",
      },
    },
    name: "Dermal Deposits",
    karma: 7,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "athletics",
          type: "BONUS",
        },
      ],
    },
    name: "Double Jointed",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "COMBAT",
      },
    },
    name: "Elemental Resistance",
    karma: 12,
    type: "POSITIVE",
    select: "ELEMENTAL",
  },
  {
    modifications: {
      attrmod: {
        val: 1,
        type: "MAX",
      },
    },
    name: "Exceptional Attribute",
    karma: 12,
    type: "POSITIVE",
    select: "ATTRIBUTE",
    multi: true,
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "con",
          type: "BONUS",
        },
        {
          skill: "influence",
          type: "BONUS",
        },
      ],
      relevancemod: {
        topic: "SOCIAL",
      },
    },
    name: "First Impression",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MAGICAL",
      },
    },
    name: "Focused Concentration",
    karma: 12,
    type: "POSITIVE",
    max: 3,
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "engineering",
          type: "BONUS",
        },
      ],
    },
    name: "Gearhead",
    karma: 10,
    type: "POSITIVE",
  },
  {
    name: "Guts",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MATRIX",
      },
    },
    name: "Hardening",
    karma: 10,
    type: "POSITIVE",
  },
  {
    modifications: {},
    name: "High Pain Tolerance",
    karma: 7,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "outdoors",
          type: "BONUS",
        },
        {
          skill: "perception",
          type: "BONUS",
        },
      ],
    },
    name: "Home Ground",
    karma: 10,
    type: "POSITIVE",
    multi: true,
    select: "NAME",
  },
  {
    requires: {
      anyreq: {
        metareq: [
          {
            ref: "elf",
          },
          {
            ref: "ork",
          },
          {
            ref: "dwarf",
          },
        ],
      },
    },
    name: "Human-Looking",
    karma: 8,
    type: "POSITIVE",
  },
  {
    name: "Indomitable",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "engineering",
          type: "BONUS",
        },
      ],
    },
    name: "Juryrigger",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "COMBAT",
      },
    },
    name: "Long Reach",
    karma: 12,
    type: "POSITIVE",
  },
  {
    name: "Low-Light Vision",
    karma: 6,
    type: "POSITIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MAGICAL",
      },
      edgemod: [
        {
          attr: "DEFENSIVE POOL COMBAT DIRECT",
          type: "BONUS",
        },
        {
          attr: "DEFENSIVE POOL COMBAT INDIRECT",
          type: "BONUS",
        },
      ],
    },
    name: "Magic Resistance",
    karma: 8,
    type: "POSITIVE",
  },
  {
    name: "Mentor Spirit",
    karma: 10,
    type: "POSITIVE",
    select: "MENTOR SPIRIT",
  },
  {
    modifications: {
      edgemod: [
        {
          attr: "MEMORY",
          type: "BONUS",
        },
      ],
    },
    name: "Photographic Memory",
    karma: 12,
    type: "POSITIVE",
  },
  {
    name: "Quick Healer",
    karma: 8,
    type: "POSITIVE",
  },
  {
    name: "Resistance Pathogens",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "conjuring",
          type: "BONUS",
        },
      ],
    },
    name: "Spirit Affinity",
    karma: 14,
    type: "POSITIVE",
    select: "SPIRIT",
    multi: true,
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "tasking",
          type: "BONUS",
        },
      ],
    },
    name: "Sprite Affinity",
    karma: 14,
    type: "POSITIVE",
    select: "SPRITE",
    multi: true,
  },
  {
    name: "Thermographic Vision",
    karma: 8,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          attr: "DEFENSIVE POOL",
          type: "BONUS",
        },
      ],
      relevancemod: {
        topic: "COMBAT",
      },
    },
    name: "Toughness",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          attr: "DEFENSIVE POOL RESIST TOXIN DAMAGE",
          type: "BONUS",
        },
      ],
    },
    name: "Toxin Resistance",
    karma: 12,
    type: "POSITIVE",
  },
  {
    modifications: {
      attrmod: {
        attr: "DAMAGE OVERFLOW",
        val: 1,
      },
    },
    name: "Will To Live",
    karma: 8,
    type: "POSITIVE",
    max: 3,
  },
]

export const negative: Quality[] = [
  {
    name: "Addiction",
    karma: 2,
    type: "NEGATIVE",
    max: 6,
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Mild",
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Moderate",
    karma: 14,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Severe",
    karma: 17,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Extreme",
    karma: 20,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Mild",
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Moderate",
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Severe",
    karma: 14,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Extreme",
    karma: 17,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Mild",
    karma: 5,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Moderate",
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Severe",
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Extreme",
    karma: 14,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Mild",
    karma: 2,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Moderate",
    karma: 5,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Severe",
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Extreme",
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Ar Vertigo",
    karma: 10,
    type: "NEGATIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "stealth",
        },
      ],
    },
    name: "Astral Beacon",
    karma: 10,
    type: "NEGATIVE",
  },
  {
    name: "Bad Luck",
    karma: 10,
    type: "NEGATIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "SOCIAL",
      },
      edgemod: [
        {
          skill: "influence",
        },
      ],
    },
    name: "Bad Rep",
    karma: 8,
    type: "NEGATIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "COMBAT",
      },
    },
    name: "Combat Paralysis",
    karma: 8,
    type: "NEGATIVE",
  },
  {
    name: "Dependents",
    karma: 4,
    type: "NEGATIVE",
    max: 3,
    select: "NAME",
  },
  {
    name: "Distinctive Style",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Elf Poser",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    modifications: {
      attrmod: {
        attr: "STUN MONITOR",
        val: -1,
        type: "AUGMENTED",
      },
    },
    name: "Glass Jaw",
    karma: 4,
    type: "NEGATIVE",
    max: 6,
  },
  {
    name: "Gremlins",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Honorbound",
    karma: 10,
    type: "NEGATIVE",
    select: "NAME",
  },
  {
    modifications: {
      attrmod: {
        val: -1,
        type: "MAX",
      },
    },
    name: "Impaired",
    karma: 8,
    type: "NEGATIVE",
    select: "ATTRIBUTE",
    multi: true,
    max: 8,
  },
  {
    name: "Incompetent",
    karma: 10,
    type: "NEGATIVE",
    select: "SKILL",
  },
  {
    modifications: {
      nuyen: 5000,
      debtInterest: 500,
    },
    name: "In Debt",
    karma: 1,
    type: "NEGATIVE",
    select: "NAME",
  },
  {
    name: "Insomnia",
    karma: 4,
    type: "NEGATIVE",
  },
  {
    name: "Loss Confidence",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Low Pain Tolerance",
    karma: 10,
    type: "NEGATIVE",
  },
  {
    name: "Ork Poser",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Prejudiced",
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MATRIX",
      },
    },
    name: "Scorched",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    requires: {
      magresreq: {
        type: "mundane",
      },
    },
    name: "Sensitive System",
    karma: 8,
    type: "NEGATIVE",
  },
  {
    modifications: {
      relevancemod: {
        topic: "MATRIX",
      },
    },
    name: "Simsense Vertigo",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Sinner",
    karma: 8,
    type: "NEGATIVE",
    select: "NAME",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "con",
        },
        {
          skill: "influence",
        },
      ],
    },
    name: "Social Stress",
    karma: 8,
    type: "NEGATIVE",
    select: "NAME",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "conjuring",
          type: "BONUS",
        },
      ],
    },
    name: "Spirit Bane",
    karma: 12,
    type: "NEGATIVE",
    select: "SPIRIT",
    multi: true,
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "tasking",
          type: "BONUS",
        },
      ],
    },
    name: "Sprite Bane",
    karma: 12,
    type: "NEGATIVE",
    select: "SPRITE",
    multi: true,
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "con",
          type: "USAGE",
        },
        {
          skill: "influence",
          type: "USAGE",
        },
      ],
    },
    name: "Uncouth",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "biotech",
          type: "USAGE",
        },
        {
          skill: "cracking",
          type: "USAGE",
        },
        {
          skill: "electronics",
          type: "USAGE",
        },
        {
          skill: "engineering",
          type: "USAGE",
        },
      ],
    },
    name: "Uneducated",
    karma: 6,
    type: "NEGATIVE",
  },
  {
    modifications: {
      edgemod: [
        {
          skill: "athletics",
          type: "USAGE",
        },
        {
          skill: "close combat",
          type: "USAGE",
        },
        {
          skill: "exotic weapons",
          type: "USAGE",
        },
        {
          skill: "firearms",
          type: "USAGE",
        },
        {
          skill: "stealth",
          type: "USAGE",
        },
      ],
    },
    name: "Unsteady Hands",
    karma: 4,
    type: "NEGATIVE",
  },
  {
    name: "Weak Immune System",
    karma: 8,
    type: "NEGATIVE",
  },
]
