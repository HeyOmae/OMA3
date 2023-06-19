export type LabelActionButtonType = "Buy" | "Sell"

export type ElementalAttackTypes = "Electrical" | "Fire" | "Chemical" | "Cold"

export interface ElementalAttack {
  effect: {
    name: string
  }
}
