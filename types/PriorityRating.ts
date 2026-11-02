import { MagRes } from "./MagRes"
import { SpecialAttributes } from "./RunnerAttributes"

export type PriorityRating = "A" | "B" | "C" | "D" | "E"

export type PriorityTypes =
  "metatype" | "attributes" | "skills" | "mag/res" | "resources"
export type Priority = Partial<Record<PriorityTypes, PriorityRating>>

// the special attribute and its starting rating for each way to be awakened
export type MagResPriorityTableOptions = {
  [magresType in Exclude<MagRes, "Mundane">]?: [
    Attribute: SpecialAttributes,
    rating: number,
  ]
} & { Mundane?: [] }
