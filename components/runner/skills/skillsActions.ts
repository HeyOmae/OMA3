import { Skills as SkillsType } from "@/types/Skill"

export const ADD_SKILL = Symbol("ADD_SKILL")
export const REMOVE_SKILL = Symbol("REMOVE_SKILL")
export const CHANGE_SKILL_RATING = Symbol("CHANGE_SKILL_RATING")
export const CHANGE_SKILL_RATING_WITH_KARMA = Symbol(
  "CHANGE_SKILL_RATING_WITH_KARMA",
)
export const CHANGE_SPECIALIZATION = Symbol("CHANGE_SPECIALIZATION")
export const CHANGE_EXPERTISE = Symbol("CHANGE_EXPERTISE")

export interface ActionPayload {
  skillToRemove?: string
  skillToAdd?: SkillsType
  skillToChangeRating?: {
    name: string
    rating: number
  }
  specializationChange?: {
    name: string
    specialization?: string
  }
}
