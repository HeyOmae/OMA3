export type PriorityRating = "A" | "B" | "C" | "D" | "E"

export type Metatypes = "Human" | "Dwarf" | "Elf" | "Ork" | "Troll"

export type PhysicalAttributes = "Body" | "Agility" | "Reaction" | "Strength"

export type MentalAttributes = "Willpower" | "Logic" | "Intuition" | "Charisma"

export type SpecialAttributes = "Edge"

export type Attributes =
  | PhysicalAttributes
  | MentalAttributes
  | SpecialAttributes

export interface AttributeStats {
  adjustment: number
  points: number
}

export type PriorityTypes =
  | "metatype"
  | "attributes"
  | "skills"
  | "mag/res"
  | "resources"

type Priority = Partial<Record<PriorityTypes, PriorityRating>>

type RunnerAttributes = Record<Attributes, AttributeStats>

export interface Runner {
  id?: number
  name: string
  description: string
  priority?: Priority
  metatype?: Metatypes
  attributes?: RunnerAttributes
}

export const initRunner: Runner = {
  name: "",
  description: "",
}

export const initRunnerAttributes: RunnerAttributes = {
  Body: { adjustment: 0, points: 0 },
  Agility: { adjustment: 0, points: 0 },
  Reaction: { adjustment: 0, points: 0 },
  Strength: { adjustment: 0, points: 0 },
  Willpower: { adjustment: 0, points: 0 },
  Logic: { adjustment: 0, points: 0 },
  Intuition: { adjustment: 0, points: 0 },
  Charisma: { adjustment: 0, points: 0 },
  Edge: { adjustment: 0, points: 0 },
}
