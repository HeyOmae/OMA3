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
import { CURRENT_SCHEMA_VERSION } from "@/hooks/runnerSchema"
import {
  Attributes,
  AttributeStats,
  RunnerAttributes,
} from "./RunnerAttributes"
import { LanguageSkill, Skills } from "./Skill"

export type Metatypes = "Human" | "Dwarf" | "Elf" | "Ork" | "Troll"

// what a metatype starts with, and the range of each of its attributes
export interface MetatypeData {
  "Racial Qualities": string[]
  Attributes: Partial<Record<Attributes, { min: number; max: number }>>
}

export interface Runner {
  id?: number
  // which migrations have been run on this runner, see hooks/migrateRunner
  schemaVersion?: number
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
  schemaVersion: CURRENT_SCHEMA_VERSION,
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
