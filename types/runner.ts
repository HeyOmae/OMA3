import { MagRes } from "./MagRes"
import { Priority } from "./PriorityRating"
import { RunnerAttributes } from "./RunnerAttributes"
import { Skills } from "./Skill"

export type Metatypes = "Human" | "Dwarf" | "Elf" | "Ork" | "Troll"

export interface Runner {
  id?: number
  name: string
  description: string
  priority?: Priority
  metatype?: Metatypes
  attributes?: RunnerAttributes
  skills?: Skills
  magres?: MagRes
}

export const initRunner: Runner = {
  name: "",
  description: "",
}

export const initRunnerAttributes: RunnerAttributes = {
  Body: { adjustment: 0, points: 0 },
  Agility: { adjustment: 0, points: 0 },
  Reaction: { adjustment: 0, points: 0 },
  Strength: { adjustment: 0, points: 0 },
  Willpower: { adjustment: 0, points: 0 },
  Logic: { adjustment: 0, points: 0 },
  Intuition: { adjustment: 0, points: 0 },
  Charisma: { adjustment: 0, points: 0 },
  Edge: { adjustment: 0, points: 0 },
  Magic: { adjustment: 0, points: 0 },
  Resonance: { adjustment: 0, points: 0 },
}
