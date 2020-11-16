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

export type SpellCategory = CombatSpellsCategory | NonCombatSpellsCategory

type NonCombatSpells = Record<NonCombatSpellsCategory, GeneralSpell[]>

export type Spells = {
  Combat: CombatSpell[]
} & NonCombatSpells

export type Ritual = {
  name: string
  threshold: number
  ritualfeature?: Spellfeature[]
}

interface Attrmod {
  attr?: string
  val?: number
  ar?: number[]
  type?: string
}

export type AdeptPower = {
  name: string
  cost: number
  levels?: true
  max?: number
  activation: "Minor action" | "Major action" | "Passive"
  modifications?:
    | {
        allowmod?: {
          skill: string
        }
        attrmod?: Attrmod
        edgemod?: {
          type: "BONUS"
          skill: string
        }
        itemattrmod?: {
          attr: string
          val: number
          type: string
        }
        skillmod?: {
          val: number
          modType: string
        }
        itemmod?: {
          item: string
          rating: number
        }
        specrulemod?: {
          ref: string
          lvl: number
        }
      }
    | Attrmod[]
  select?: string
  requires?: {
    skillreq: {
      val: number
    }
  }
}
