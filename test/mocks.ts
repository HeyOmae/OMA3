import { initRunnerAttributes, Runner } from "../types/runner"

export const mockedRunners: Runner[] = [
  {
    id: 1,
    name: "Bull",
    description: "The best ork decker you never met.",
  },
  {
    id: 2,
    name: "Man-of-many-names",
    description: "Not knowns by any other name",
    priority: {
      metatype: "E",
      skills: "C",
      attributes: "B",
      "mag/res": "A",
    },
    metatype: "Human",
    attributes: {
      Body: { adjustment: 0, points: 0 },
      Agility: { adjustment: 0, points: 0 },
      Reaction: { adjustment: 0, points: 0 },
      Strength: { adjustment: 0, points: 0 },
      Willpower: { adjustment: 0, points: 0 },
      Logic: { adjustment: 0, points: 1 },
      Intuition: { adjustment: 0, points: 5 },
      Charisma: { adjustment: 0, points: 0 },
      Edge: { adjustment: 0, points: 0 },
      Magic: { adjustment: 0, points: 0 },
      Resonance: { adjustment: 0, points: 0 },
    },
    skills: {
      Conjuring: {
        rating: 6,
        attribute: {
          primary: "Magic",
        },
        specialization: "Banishing",
      },
      Sorcery: {
        rating: 5,
        attribute: {
          primary: "Magic",
        },
      },
      Perception: {
        rating: 4,
        attribute: {
          primary: "Intuition",
          secondary: "Logic",
        },
      },
    },
  },
  {
    id: 3,
    name: "FastJack",
    description:
      "He was born in the 1990's and now has an AI living in his brain.",
    priority: {
      metatype: "D",
      attributes: "C",
      skills: "B",
      "mag/res": "E",
      resources: "A",
    },
  },
  {
    id: 4,
    name: "/dev/grrl",
    description:
      "Elvin decker from Boston. Hacker her way on to JackPoint at 16 and enter the shadows.",
    priority: {
      metatype: "D",
    },
    metatype: "Elf",
    attributes: initRunnerAttributes,
  },
  {
    id: 5,
    name: "Winterhawk",
    description:
      "Alexander King, also known as the Shadowrunner Winterhawk is an English human male hermetic mage. He is known for his academic work in thaumaturgy.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Full",
    spells: {
      Combat: [
        {
          name: "Manabolt",
          category: "Combat",
          range: "Line of sight",
          type: "Mana",
          duration: "Instantaneous",
          drain: 4,
          damage: "Physical",
          spellfeature: [
            {
              ref: "Direct",
            },
          ],
        },
        {
          name: "Fireball",
          category: "Combat",
          range: "Line of sight area",
          type: "Physical",
          duration: "Instantaneous",
          drain: 6,
          damage: "Physical special",
          spellfeature: [
            {
              ref: "Indirect",
            },
            {
              ref: "Area",
            },
          ],
        },
        {
          name: "Stunball",
          category: "Combat",
          range: "Line of sight area",
          type: "Mana",
          duration: "Instantaneous",
          drain: 4,
          damage: "Stun",
          spellfeature: [
            {
              ref: "Direct",
            },
            {
              ref: "Area",
            },
          ],
        },
      ],
      Health: [
        {
          name: "Heal",
          category: "Health",
          range: "Touch",
          type: "Physical",
          duration: "Permanent",
          drain: 3,
        },
      ],
      Manipulation: [
        {
          name: "Armor",
          category: "Manipulation",
          range: "Touch",
          type: "Physical",
          duration: "Sustained",
          drain: 4,
        },
        {
          name: "Levitate",
          category: "Manipulation",
          range: "Line of sight",
          type: "Physical",
          duration: "Sustained",
          drain: 6,
        },
        {
          name: "Mana barrier",
          category: "Manipulation",
          range: "Line of sight area",
          type: "Mana",
          duration: "Sustained",
          drain: 5,
        },
        {
          name: "Physical barrier",
          category: "Manipulation",
          range: "Line of sight area",
          type: "Physical",
          duration: "Sustained",
          drain: 6,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Elijah",
    description:
      "He studied thaumaturgy and then became a freelance arcano-archaeologist",
    priority: { metatype: "E", "mag/res": "A" },
  },
  {
    id: 7,
    name: "Frosty",
    description: "Immortal elf runner",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Full",
    rituals: [
      {
        name: "Ward",
        threshold: 6,
        ritualfeature: [
          {
            ref: "anchored",
          },
        ],
      },
      {
        name: "Circle of protection",
        threshold: 6,
        ritualfeature: [
          {
            ref: "anchored",
          },
        ],
      },
      {
        name: "Curse",
        threshold: 5,
        ritualfeature: [
          {
            ref: "material link",
          },
          {
            ref: "spell",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Ma'Fan",
    description:
      "Yuan Lai (aka Ma'Fan) is a Chinese international cat burglar and shadowrunner. She is a member of Jackpoint. She is awakened; being a physical adept. She suffers from gremlins and doesn't often use technology.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Adept",
    powers: [
      {
        name: "Traceless walk",
        cost: 0.5,
        activation: "Passive",
      },
      {
        name: "Improved reflexes",
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
        name: "Attribute boost",
        cost: 0.25,
        levels: true,
        level: 2,
        select: "PHYSICAL ATTRIBUTE",
        activation: "Major action",
      },
    ],
  },
]

export const orkRunner: Runner = {
  ...mockedRunners[0],
  metatype: "Ork",
  attributes: initRunnerAttributes,
}
