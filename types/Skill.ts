import { Attributes } from "./RunnerAttributes"

interface Skill {
  rating: number
  attribute: {
    primary: Attributes
    secondary?: Attributes
  }
  specialization?: string
  expertise?: string
}

export type Skills = {
  [skillName: string]: Skill
}

export interface LanguageSkill {
  name: string
  rating: "Native" | 1 | 2 | 3 | 4
}
