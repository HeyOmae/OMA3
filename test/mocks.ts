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
      conjuring: {
        rating: 6,
        attribute: {
          primary: "Magic",
        },
        specialization: "banishing",
      },
      sorcery: {
        rating: 5,
        attribute: {
          primary: "Magic",
        },
      },
      perception: {
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
  },
]

export const orkRunner: Runner = {
  ...mockedRunners[0],
  metatype: "Ork",
  attributes: initRunnerAttributes,
}
