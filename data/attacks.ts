import { ElementalAttack, ElementalAttackTypes } from "@/types/generalTypes"

export const elemental: Record<ElementalAttackTypes, ElementalAttack> = {
  Electrical: {
    effect: { name: "Zapped" },
  },
  Fire: {
    effect: { name: "Burning" },
  },
  Chemical: {
    effect: { name: "Corroded" },
  },
  Cold: {
    effect: { name: "Chillded" },
  },
}
