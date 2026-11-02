export type LabelActionButtonType = "Buy" | "Sell"

export type ElementalAttackTypes = "Electrical" | "Fire" | "Chemical" | "Cold"

export interface ElementalAttack {
  effect: {
    name: string
  }
}

// Where something is described in a rulebook, like { book: "SR6 Berlin", page: 133 }
export interface Reference {
  book: string
  page: number
}
