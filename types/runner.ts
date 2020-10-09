export type PriorityRating = "a" | "b" | "c" | "d" | "e"

export type Metatypes = "Human" | "Dwarf" | "Elf" | "Ork" | "Troll"

export type PhysicalAttributes = "Body" | "Agility" | "Reaction" | "Strength"

export type MentalAttributes = "Willpower" | "Logic" | "Intuition" | "Charisma"

export type SpecialAttributes = "Edge"

export type Attributes =
  | PhysicalAttributes
  | MentalAttributes
  | SpecialAttributes

export interface AttributeStats {
  adjustment?: number
  points?: number
}

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
  attributes?: Partial<Record<Attributes, AttributeStats>>
}

export const initRunner: Runner = {
  name: "",
  description: "",
}
