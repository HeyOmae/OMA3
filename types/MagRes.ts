export type MagRes =
  | "Full"
  | "Aspected"
  | "Mystic Adept"
  | "Adept"
  | "Technomancer"
  | "Mundane"

type Spellfeature = {
  ref: string
}

export interface GeneralSpell {
  name: string
  category: "Illusion" | "Health" | "Manipulation" | "Detection"
  range: "Touch" | "Line of sight" | "Line of sight area" | "Special"
  type: "Physical" | "Mana"
  duration: "Limited" | "Sustained" | "Instantaneous"
  drain: number
  spellfeature?: Spellfeature[]
}

export interface CombatSpell extends Omit<GeneralSpell, "category"> {
  category: "Combat"
  damage: "Physical special" | "Physical" | "Stun"
  spellfeature: [Direct: { ref: "direct" | "indirect" }, Area?: { ref: "Area" }]
}

export type Spell = GeneralSpell | CombatSpell

export type Spells = {
  Combat: CombatSpell[]
  Detection: GeneralSpell[]
  Health: GeneralSpell[]
  Illusion: GeneralSpell[]
  Manipulation: GeneralSpell[]
}
