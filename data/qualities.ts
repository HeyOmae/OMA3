import { Quality } from "@/types/Qualities"

export const positive: Quality[] = [
  {
    modifications: {
      relevancemod: {
        topic: "COMBAT",
      },
    },
    name: "Ambidextrous",
    reference: [{ book: "SR6 Berlin", page: 70 }],
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
    reference: [{ book: "SR6 Berlin", page: 70 }],
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
    reference: [{ book: "SR6 Berlin", page: 70 }],
    karma: 12,
    type: "POSITIVE",
    select: "SKILL",
  },
  {
    name: "Astral Chameleon",
    reference: [{ book: "SR6 Berlin", page: 70 }],
    karma: 9,
    type: "POSITIVE",
  },
  {
    name: "Blandness",
    reference: [{ book: "SR6 Berlin", page: 70 }],
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
    reference: [{ book: "SR6 Berlin", page: 70 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 71 }],
    karma: 10,
    type: "POSITIVE",
  },
  {
    name: "Guts",
    reference: [{ book: "SR6 Berlin", page: 71 }],
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
    reference: [{ book: "SR6 Berlin", page: 72 }],
    karma: 10,
    type: "POSITIVE",
  },
  {
    modifications: {},
    name: "High Pain Tolerance",
    reference: [{ book: "SR6 Berlin", page: 72 }],
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
    reference: [{ book: "SR6 Berlin", page: 72 }],
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
    reference: [{ book: "SR6 Berlin", page: 72 }],
    karma: 8,
    type: "POSITIVE",
  },
  {
    name: "Indomitable",
    reference: [{ book: "SR6 Berlin", page: 72 }],
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
    reference: [{ book: "SR6 Berlin", page: 72 }],
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
    reference: [{ book: "SR6 Berlin", page: 72 }],
    karma: 12,
    type: "POSITIVE",
  },
  {
    name: "Low-Light Vision",
    reference: [{ book: "SR6 Berlin", page: 72 }],
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
    reference: [{ book: "SR6 Berlin", page: 72 }],
    karma: 8,
    type: "POSITIVE",
  },
  {
    name: "Mentor Spirit",
    reference: [{ book: "SR6 Berlin", page: 73 }],
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
    reference: [{ book: "SR6 Berlin", page: 73 }],
    karma: 12,
    type: "POSITIVE",
  },
  {
    name: "Quick Healer",
    reference: [{ book: "SR6 Berlin", page: 73 }],
    karma: 8,
    type: "POSITIVE",
  },
  {
    name: "Resistance Pathogens",
    reference: [{ book: "SR6 Berlin", page: 73 }],
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
    reference: [{ book: "SR6 Berlin", page: 73 }],
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
    reference: [{ book: "SR6 Berlin", page: 73 }],
    karma: 14,
    type: "POSITIVE",
    select: "SPRITE",
    multi: true,
  },
  {
    name: "Thermographic Vision",
    reference: [{ book: "SR6 Berlin", page: 73 }],
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
    reference: [{ book: "SR6 Berlin", page: 73 }],
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
    reference: [{ book: "SR6 Berlin", page: 73 }],
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
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 8,
    type: "POSITIVE",
    max: 3,
  },
]

export const negative: Quality[] = [
  {
    name: "Addiction",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 2,
    type: "NEGATIVE",
    max: 6,
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Mild",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Moderate",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 14,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Severe",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 17,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Common Extreme",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 20,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Mild",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Moderate",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Severe",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 14,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Seasonal Extreme",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 17,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Mild",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 5,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Moderate",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Severe",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Uncommon Extreme",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 14,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Mild",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 2,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Moderate",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 5,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Severe",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 8,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "Allergy Rare Extreme",
    reference: [{ book: "SR6 Berlin", page: 74 }],
    karma: 11,
    type: "NEGATIVE",
    multi: true,
    select: "NAME",
  },
  {
    name: "AR Vertigo",
    reference: [{ book: "SR6 Berlin", page: 75 }],
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
    reference: [{ book: "SR6 Berlin", page: 75 }],
    karma: 10,
    type: "NEGATIVE",
  },
  {
    name: "Bad Luck",
    reference: [{ book: "SR6 Berlin", page: 75 }],
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
    reference: [{ book: "SR6 Berlin", page: 75 }],
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
    reference: [{ book: "SR6 Berlin", page: 75 }],
    karma: 8,
    type: "NEGATIVE",
  },
  {
    name: "Dependents",
    reference: [{ book: "SR6 Berlin", page: 75 }],
    karma: 4,
    type: "NEGATIVE",
    max: 3,
    select: "NAME",
  },
  {
    name: "Distinctive Style",
    reference: [{ book: "SR6 Berlin", page: 76 }],
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Elf Poser",
    reference: [{ book: "SR6 Berlin", page: 76 }],
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
    reference: [{ book: "SR6 Berlin", page: 76 }],
    karma: 4,
    type: "NEGATIVE",
    max: 6,
  },
  {
    name: "Gremlins",
    reference: [{ book: "SR6 Berlin", page: 76 }],
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Honorbound",
    reference: [{ book: "SR6 Berlin", page: 76 }],
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
    reference: [{ book: "SR6 Berlin", page: 76 }],
    karma: 8,
    type: "NEGATIVE",
    select: "ATTRIBUTE",
    multi: true,
    max: 8,
  },
  {
    name: "Incompetent",
    reference: [{ book: "SR6 Berlin", page: 76 }],
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
    reference: [{ book: "SR6 Berlin", page: 77 }],
    karma: 0,
    type: "NEGATIVE",
    select: "NAME",
  },
  {
    name: "Insomnia",
    reference: [{ book: "SR6 Berlin", page: 77 }],
    karma: 4,
    type: "NEGATIVE",
  },
  {
    name: "Loss Confidence",
    reference: [{ book: "SR6 Berlin", page: 78 }],
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Low Pain Tolerance",
    reference: [{ book: "SR6 Berlin", page: 78 }],
    karma: 10,
    type: "NEGATIVE",
  },
  {
    name: "Ork Poser",
    reference: [{ book: "SR6 Berlin", page: 78 }],
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Prejudiced",
    reference: [{ book: "SR6 Berlin", page: 78 }],
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
    reference: [{ book: "SR6 Berlin", page: 78 }],
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
    reference: [{ book: "SR6 Berlin", page: 78 }],
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
    reference: [{ book: "SR6 Berlin", page: 78 }],
    karma: 6,
    type: "NEGATIVE",
  },
  {
    name: "Sinner",
    reference: [{ book: "SR6 Berlin", page: 78 }],
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
    reference: [{ book: "SR6 Berlin", page: 78 }],
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
    reference: [{ book: "SR6 Berlin", page: 79 }],
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
    reference: [{ book: "SR6 Berlin", page: 79 }],
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
    reference: [{ book: "SR6 Berlin", page: 79 }],
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
    reference: [{ book: "SR6 Berlin", page: 79 }],
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
    reference: [{ book: "SR6 Berlin", page: 79 }],
    karma: 4,
    type: "NEGATIVE",
  },
  {
    name: "Weak Immune System",
    reference: [{ book: "SR6 Berlin", page: 79 }],
    karma: 8,
    type: "NEGATIVE",
  },
]
