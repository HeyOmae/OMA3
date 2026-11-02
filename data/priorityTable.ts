import type {
  MagResPriorityTableOptions,
  PriorityRating,
} from "../types/PriorityRating"
import type { Metatypes } from "../types/runner"
import type { Awakened } from "../types/MagRes"
import type { Priority } from "../types/PriorityRating"
import { defined } from "../components/util"

interface MetatypePriority {
  supportedMetatypes: Metatypes[]
  adjustmentPoints: number
}

// The priority table, SR6 p. 64
const priorityTable: {
  metatypes: Record<PriorityRating, MetatypePriority>
  attributes: Record<PriorityRating, number>
  skills: Record<PriorityRating, number>
  "mag/res": Record<PriorityRating, MagResPriorityTableOptions>
  resources: Record<PriorityRating, number>
} = {
  metatypes: {
    A: {
      supportedMetatypes: ["Dwarf", "Ork", "Troll"],
      adjustmentPoints: 13,
    },
    B: {
      supportedMetatypes: ["Dwarf", "Elf", "Ork", "Troll"],
      adjustmentPoints: 11,
    },
    C: {
      supportedMetatypes: ["Dwarf", "Elf", "Human", "Ork", "Troll"],
      adjustmentPoints: 9,
    },
    D: {
      supportedMetatypes: ["Dwarf", "Elf", "Human", "Ork", "Troll"],
      adjustmentPoints: 4,
    },
    E: {
      supportedMetatypes: ["Dwarf", "Elf", "Human", "Ork", "Troll"],
      adjustmentPoints: 1,
    },
  },
  attributes: {
    A: 24,
    B: 16,
    C: 12,
    D: 8,
    E: 2,
  },
  skills: {
    A: 32,
    B: 24,
    C: 20,
    D: 16,
    E: 10,
  },
  "mag/res": {
    A: {
      Full: ["Magic", 4],
      Aspected: ["Magic", 5],
      "Mystic Adept": ["Magic", 4],
      Adept: ["Magic", 4],
      Technomancer: ["Resonance", 4],
    },
    B: {
      Full: ["Magic", 3],
      Aspected: ["Magic", 4],
      "Mystic Adept": ["Magic", 3],
      Adept: ["Magic", 3],
      Technomancer: ["Resonance", 3],
    },
    C: {
      Full: ["Magic", 2],
      Aspected: ["Magic", 3],
      "Mystic Adept": ["Magic", 2],
      Adept: ["Magic", 2],
      Technomancer: ["Resonance", 2],
    },
    D: {
      Full: ["Magic", 1],
      Aspected: ["Magic", 2],
      "Mystic Adept": ["Magic", 1],
      Adept: ["Magic", 1],
      Technomancer: ["Resonance", 1],
    },
    E: {
      Mundane: [],
    },
  },
  resources: {
    A: 450000,
    B: 275000,
    C: 150000,
    D: 50000,
    E: 8000,
  },
}

export default priorityTable

// the Magic or Resonance a runner starts with for how they're awakened
export const startingMagResRating = (
  priority: Priority | undefined,
  magres: Awakened,
) =>
  defined(
    priorityTable["mag/res"][defined(priority?.["mag/res"], "mag/res")][magres],
    magres,
  )[1]
