export type PriorityRating = "A" | "B" | "C" | "D" | "E"

export type PriorityTypes =
  | "metatype"
  | "attributes"
  | "skills"
  | "mag/res"
  | "resources"
export type Priority = Partial<Record<PriorityTypes, PriorityRating>>
