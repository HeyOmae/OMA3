// attributes are added as the runner is built, so any of them can be missing
export type RunnerAttributes = Partial<Record<Attributes, AttributeStats>>

export type PhysicalAttributes = "Body" | "Agility" | "Reaction" | "Strength"

export type MentalAttributes = "Willpower" | "Logic" | "Intuition" | "Charisma"

export type SpecialAttributes = "Edge" | "Magic" | "Resonance"

export type Attributes =
  PhysicalAttributes | MentalAttributes | SpecialAttributes

export interface AttributeStats {
  adjustment: number
  points: number
  karma?: number
}

// everything spent on an attribute, on top of where it starts
export const attributeTotal = ({
  adjustment,
  points,
  karma = 0,
}: AttributeStats) => adjustment + points + karma
