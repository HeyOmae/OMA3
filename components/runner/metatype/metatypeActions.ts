import { Metatypes } from "@/types/runner"
import { Attributes } from "@/types/RunnerAttributes"

export const SET_METATYPE = Symbol("SET_METATYPE")
export const SPEND_ATTRIBUTE_POINTS = Symbol("SPEND_ATTRIBUTE_POINTS")
export const SPEND_ADJUSTMENT_POINTS = Symbol("SPEND_ADJUSTMENT_POINTS")
export const SPEND_KARMA = Symbol("SPEND_KARMA")

export interface Payload {
  metatype?: Metatypes
  key?: Attributes
  value?: number
}
