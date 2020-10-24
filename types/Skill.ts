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
