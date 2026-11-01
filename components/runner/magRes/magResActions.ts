import {
  AdeptPower,
  ComplexForm,
  MagRes as MagicResonance,
  Ritual,
  Spell,
  SpellCategory,
} from "@/types/MagRes"

export const SET_MAGRES = Symbol("SET_MAGRES")
export const SET_MAGIC = Symbol("SET_MAGIC")
export const SET_RESONANCE = Symbol("SET_RESONANCE")
export const SET_SPELL = Symbol("SET_SPELL")
export const REMOVE_SPELL = Symbol("REMOVE_SPELL")
export const SET_RITUAL = Symbol("SET_RITUAL")
export const REMOVE_RITUAL = Symbol("REMOVE_RITUAL")
export const SET_POWER = Symbol("SET_POWER")
export const REMOVE_POWER = Symbol("REMOVE_POWER")
export const CHANGE_POWER_LEVEL = Symbol("CHANGE_POWER_LEVEL")
export const SET_COMPLEX_FORM = Symbol("SET_COMPLEX_FORM")
export const REMOVE_COMPLEX_FORM = Symbol("REMOVE_COMPLEX_FORM")

export interface Payload {
  magres?: MagicResonance
  adjustment?: number
  spell?: Spell
  removeSpell?: {
    spellCategory: SpellCategory
    spellIndex: number
  }
  ritual?: Ritual
  removeRitual?: number
  power?: AdeptPower
  removePower?: number
  powerLevel?: {
    powerIndex: number
    level: number
  }
  complexForm?: ComplexForm
  removeComplexForm?: number
}
