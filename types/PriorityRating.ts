import { MagRes } from "./MagRes"
import { SpecialAttributes } from "./RunnerAttributes"

export type PriorityRating = "A" | "B" | "C" | "D" | "E"

export type PriorityTypes =
  | "metatype"
  | "attributes"
  | "skills"
  | "mag/res"
  | "resources"
export type Priority = Partial<Record<PriorityTypes, PriorityRating>>

export type MagResPriorityTableOptions = {
  [magresType in MagRes]?: [Attribute?: SpecialAttributes, rating?: number]
}
