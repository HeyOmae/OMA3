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
]

export const orkRunner: Runner = {
  ...mockedRunners[0],
  metatype: "Ork",
  attributes: initRunnerAttributes,
}
