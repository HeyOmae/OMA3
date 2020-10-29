import { CombatSpells } from "./CombatSpells"
import { SpellsTable } from "./SpellsTable"
import {
  Detection,
  Health,
  Illusion,
  Manipulation,
} from "../../../../data/spells.json"

export const Spells = () => {
  return (
    <>
      <h1>Combat Spells</h1>
      <CombatSpells />
      <h1>Detection Spells</h1>
      <SpellsTable spells={Detection} />
      <h1>Health Spells</h1>
      <SpellsTable spells={Health} />
      <h1>Illusion Spells</h1>
      <SpellsTable spells={Illusion} />
      <h1>Manipulation Spells</h1>
      <SpellsTable spells={Manipulation} />
    </>
  )
}
