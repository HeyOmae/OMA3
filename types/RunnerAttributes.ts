export type RunnerAttributes = Record<Attributes, AttributeStats>

export type PhysicalAttributes = "Body" | "Agility" | "Reaction" | "Strength"

export type MentalAttributes = "Willpower" | "Logic" | "Intuition" | "Charisma"

export type SpecialAttributes = "Edge" | "Magic" | "Resonance"

export type Attributes =
  | PhysicalAttributes
  | MentalAttributes
  | SpecialAttributes

export interface AttributeStats {
  adjustment: number
  points: number
}
