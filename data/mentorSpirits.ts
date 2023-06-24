import { MentorSpirit } from "@/types/MentorSpirits"

export const mentorSpirits: MentorSpirit[] = [
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          resist: "BOTH",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Health",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Rapid Healing",
          value: 1,
        },
      ],
    },
    name: "Bear",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Athletics",
        },
        {
          type: "COST",
          skill: "Stealth",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Illusion",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Traceless Walk",
        },
      ],
    },
    name: "Cat",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Con",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Manipulation",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Vocal Control",
          value: 1,
        },
      ],
    },
    name: "Coyote",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Outdoors",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Detection",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Improved Sense",
          value: 2,
        },
      ],
    },
    name: "Dog",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Influence",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Combat",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Danger Sense",
          value: 1,
        },
      ],
    },
    name: "Dragonslayer",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Perception",
        },
      ],
      qualitymod: [
        {
          ref: "Allergy Common Mild",
          choice: "Pollutants",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          skill: "Conjuring",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Combat Sense",
          value: 1,
        },
      ],
    },
    name: "Eagle",
  },
  {
    modifications: {
      selmod: {
        edgemod: [
          {
            type: "COST",
            skill: "Engineering",
          },
          {
            type: "COST",
            skill: "Enchanting",
          },
        ],
      },
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Manipulation",
        },
      ],
    },
    adept: {
      selmod: {
        powermod: [
          {
            ref: "Improved Ability",
            choice: "Astral",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Athletics",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Biotech",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Con",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Conjuring",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Cracking",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Electronics",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Enchanting",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Engineering",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Influence",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Outdoors",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Perception",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Piloting",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Sorcery",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Stealth",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Tasking",
            value: 1,
          },
        ],
      },
    },
    name: "Firebringer",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Outdoors",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          skill: "Sorcery",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Mystic Armor",
          value: 2,
        },
      ],
    },
    name: "Mountain",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Stealth",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          skill: "Sorcery",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Pain Resistance",
          value: 1,
        },
      ],
    },
    name: "Rat",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Athletics",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          skill: "Conjuring",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Improved Ability",
          choice: "Athletics",
          value: 1,
        },
      ],
    },
    name: "Sea",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Con",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Illusion",
        },
      ],
    },
    adept: {
      selmod: {
        powermod: [
          {
            ref: "Improved Ability",
            choice: "Con",
            value: 1,
          },
          {
            ref: "Improved Ability",
            choice: "Influence",
            value: 1,
          },
        ],
      },
    },
    name: "Seducer",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Close Combat",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Combat",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Killing Hands",
        },
      ],
    },
    name: "Shark",
  },
  {
    modifications: {
      skillmod: [
        {
          ref: "Knowledge",
          value: 1,
        },
        {
          ref: "Knowledge",
          value: 1,
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Detection",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Kinesics",
        },
      ],
    },
    name: "Snake",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Influence",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          skill: "Conjuring",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Critical Strike",
          value: 1,
        },
      ],
    },
    name: "Thunderbird",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Influence",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Combat",
        },
      ],
    },
    adept: {
      selmod: {
        powermod: [
          {
            ref: "Improved Ability Combat",
            choice: "Close Combat",
            value: 1,
          },
          {
            ref: "Improved Ability Combat",
            choice: "Exotic Weapons",
            value: 1,
          },
          {
            ref: "Improved Ability Combat",
            choice: "Firearms",
            value: 1,
          },
        ],
      },
    },
    name: "Wise Warrior",
  },
  {
    modifications: {
      edgemod: [
        {
          type: "COST",
          skill: "Sorcery",
        },
      ],
    },
    magician: {
      edgemod: [
        {
          type: "COST",
          category: "Combat",
        },
      ],
    },
    adept: {
      powermod: [
        {
          ref: "Attribute Boost",
          value: 2,
          choice: "Agility",
        },
      ],
    },
    name: "Wolf",
  },
]
