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
  duration: "Limited" | "Sustained" | "Instantaneous" | "Permanent"
  drain: number
  spellfeature?: Spellfeature[]
}

export interface CombatSpell extends Omit<GeneralSpell, "category"> {
  category: "Combat"
  damage: "Physical special" | "Physical" | "Stun"
  spellfeature: [Direct: { ref: "Direct" | "Indirect" }, Area?: { ref: "Area" }]
}

export type Spell = GeneralSpell | CombatSpell

type CombatSpellsCategory = "Combat"
export type NonCombatSpellsCategory =
  | "Detection"
  | "Health"
  | "Illusion"
  | "Manipulation"

export type SpellCategory = CombatSpellsCategory & NonCombatSpellsCategory

type NonCombatSpells = Record<NonCombatSpellsCategory, GeneralSpell[]>

export type Spells = {
  Combat: CombatSpell[]
} & NonCombatSpells
