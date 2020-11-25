import { AdeptPower, ComplexForm, MagRes, Ritual, Spells } from "./MagRes"
import { Priority } from "./PriorityRating"
import { AttributeStats, RunnerAttributes } from "./RunnerAttributes"
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
  spells?: Partial<Spells>
  rituals?: Ritual[]
  powers?: AdeptPower[]
  complexForms?: ComplexForm[]
}

export const initRunner: Runner = {
  name: "",
  description: "",
}
export const initRunnerAttribute: AttributeStats = { adjustment: 0, points: 0 }

export const initRunnerAttributes: RunnerAttributes = {
  Body: initRunnerAttribute,
  Agility: initRunnerAttribute,
  Reaction: initRunnerAttribute,
  Strength: initRunnerAttribute,
  Willpower: initRunnerAttribute,
  Logic: initRunnerAttribute,
  Intuition: initRunnerAttribute,
  Charisma: initRunnerAttribute,
  Edge: initRunnerAttribute,
  Magic: initRunnerAttribute,
  Resonance: initRunnerAttribute,
}
