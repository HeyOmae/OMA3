export type PriorityRating = "a" | "b" | "c" | "d" | "e"

export type Metatypes = "Human" | "Dwarf" | "Elf" | "Ork" | "Troll"

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
  metatype?: Metatypes
}

export const initRunner: Runner = {
  name: "",
  description: "",
}
