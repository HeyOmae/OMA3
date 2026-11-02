import type { AdeptPower } from "../types/MagRes"

// Every adept power

const adeptPowers: AdeptPower[] = [
  {
    name: "Adrenaline Boost",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 0.25,
    levels: true,
    activation: "Minor action",
  },
  {
    name: "Astral Perception",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 1,
    activation: "Minor action",
    modifications: {
      allowmod: {
        skill: "astral",
      },
    },
  },
  {
    name: "Attribute Boost",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 0.25,
    levels: true,
    select: "PHYSICAL ATTRIBUTE",
    activation: "Major action",
  },
  {
    name: "Combat Sense",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 0.5,
    levels: true,
    activation: "Passive",
    modifications: {
      relevancemod: {
        topic: "COMBAT",
      },
      attrmod: {
        attr: "DEFENSIVE POOL",
        val: 1,
      },
      edgemod: {
        type: "BONUS",
        skill: "perception",
      },
    },
  },
  {
    name: "Critical Strike",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 1,
    levels: true,
    activation: "Passive",
    modifications: {
      itemattrmod: {
        attr: "DAMAGE",
        val: 1,
        type: "WEAPON CLOSE COMBAT",
      },
    },
  },
  {
    name: "Danger Sense",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 0.5,
    activation: "Passive",
  },
  {
    name: "Direction Sense",
    reference: [{ book: "SR6 Berlin", page: 156 }],
    cost: 0.25,
    activation: "Passive",
  },
  {
    name: "Enhanced Perception",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.5,
    activation: "Passive",
  },
  {
    name: "Enhanced Accuracy",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.5,
    activation: "Passive",
    modifications: {
      attrmod: {
        attr: "ATTACK RATING",
        ar: [2, 2, 2, 2, 2],
      },
    },
  },
  {
    name: "Improved Ability",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.5,
    levels: true,
    select: "Noncombat skill",
    activation: "Passive",
    modifications: {
      skillmod: {
        val: 1,
        modType: "augmented",
      },
    },
    requires: {
      skillreq: {
        val: 1,
      },
    },
  },
  {
    name: "Improved Ability Combat",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 1,
    levels: true,
    select: "COMBAT SKILL",
    activation: "Passive",
    modifications: {
      skillmod: {
        val: 1,
        modType: "augmented",
      },
    },
    requires: {
      skillreq: {
        val: 1,
      },
    },
  },
  {
    name: "Improved Physical Attribute",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 1,
    levels: true,
    max: 4,
    select: "PHYSICAL ATTRIBUTE",
    activation: "Passive",
    modifications: {
      attrmod: {
        val: 1,
      },
    },
  },
  {
    name: "Improved Reflexes",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 1.0,
    levels: true,
    max: 4,
    activation: "Passive",
    modifications: [
      {
        attr: "REACTION",
        val: 1,
        type: "augmented",
      },
      {
        attr: "INITIATIVE DICE PHYSICAL",
        val: 1,
      },
    ],
  },
  {
    name: "Improved Sense",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.25,
    select: "SENSE",
    activation: "Passive",
  },
  {
    name: "Killing Hands",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.5,
    activation: "Minor action",
  },
  {
    name: "Kinesics",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.25,
    activation: "Passive",
  },
  {
    name: "Mystic Armor",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.25,
    levels: true,
    activation: "Passive",
    modifications: {
      itemmod: {
        item: "mystic armor armor",
        rating: 1,
      },
    },
  },
  {
    name: "Pain Resistance",
    reference: [{ book: "SR6 Berlin", page: 157 }],
    cost: 0.25,
    levels: true,
    activation: "Passive",
    modifications: {
      specrulemod: {
        ref: "PAIN TOLERANCE HIGH",
        lvl: 1,
      },
    },
  },
  {
    name: "Rapid Healing",
    reference: [{ book: "SR6 Berlin", page: 158 }],
    cost: 0.5,
    levels: true,
    activation: "Passive",
  },
  {
    name: "Spell Resistance",
    reference: [{ book: "SR6 Berlin", page: 158 }],
    cost: 0.5,
    activation: "Passive",
  },
  {
    name: "Traceless Walk",
    reference: [{ book: "SR6 Berlin", page: 158 }],
    cost: 0.5,
    activation: "Passive",
  },
  {
    name: "Vocal Control",
    reference: [{ book: "SR6 Berlin", page: 158 }],
    cost: 0.5,
    levels: true,
    activation: "Passive",
  },
  {
    name: "Wall Running",
    reference: [{ book: "SR6 Berlin", page: 158 }],
    cost: 0.5,
    activation: "Minor action",
  },
]
export default adeptPowers
