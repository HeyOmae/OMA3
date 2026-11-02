import { Attributes } from "./RunnerAttributes"

export interface Skill {
  rating: number
  karmaRating?: number
  attribute: {
    primary: Attributes
    secondary?: Attributes
  }
  specialization?: string
  expertise?: string
}

// a skill as the rules describe it, before a runner learns it
export interface SkillData {
  name: string
  attribute: Attributes
  secondary?: Attributes
  category:
    "Combat" | "Magic" | "Physical" | "Resonance" | "Social" | "Technical"
  untrained: boolean
  // only some characters can learn it, like magic users for Sorcery
  restrict?: true
  specializations?: {
    name: string
    // the firearm classes a Firearms specialization covers, comma separated
    "@subtypes"?: string
  }[]
}

export type Skills = {
  [skillName: string]: Skill
}

export type LanguageRating = "Native" | 1 | 2 | 3 | 4

export interface LanguageSkill {
  name: string
  rating: LanguageRating
}
