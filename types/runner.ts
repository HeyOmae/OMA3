import {
  AdeptPower,
  ComplexForm,
  MagRes,
  MetaMagic,
  Ritual,
  Spells,
} from "./MagRes"
import { Echo } from "./Matrix"
import { Priority } from "./PriorityRating"
import { Quality } from "./Qualities"
import { Resources } from "./Resources"
import { AttributeStats, RunnerAttributes } from "./RunnerAttributes"
import { LanguageSkill, Skills } from "./Skill"

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
  initiation?: MetaMagic[]
  submersion?: Echo[]
  resources?: Partial<Resources>
  knowledge?: string[]
  language?: LanguageSkill[]
  qualities?: {
    positive?: Quality[]
    negative?: Quality[]
  }
  karmaToNuyen?: number
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
