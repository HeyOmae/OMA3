import { CombatSpells } from "./CombatSpells"
import { DetectionSpells } from "./DetectionSpells"

export const Spells = () => {
  return (
    <>
      <h1>Combat Spells</h1>
      <CombatSpells />
      <h1>Detection Spells</h1>
      <DetectionSpells />
    </>
  )
}
