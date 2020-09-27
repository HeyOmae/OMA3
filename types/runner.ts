export type PriorityRating = "a" | "b" | "c" | "d" | "e"

export interface Runner {
  id?: number
  name: string
  description: string
  priority?: {
    metatype?: PriorityRating
    attributes?: PriorityRating
    skills?: PriorityRating
    "mag/res"?: PriorityRating
    resources?: PriorityRating
  }
}

export const initRunner: Runner = {
  name: "",
  description: "",
}
