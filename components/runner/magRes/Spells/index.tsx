import { CombatSpells } from "./CombatSpells"
import { SpellsTable } from "./SpellsTable"
import {
  Detection,
  Health,
  Illusion,
  Manipulation,
} from "../../../../data/spells.json"
import { GeneralSpell } from "../../../../types/MagRes"

export const Spells = () => {
  return (
    <>
      <h1>Combat Spells</h1>
      <CombatSpells />
      <h1>Detection Spells</h1>
      <SpellsTable spells={Detection as GeneralSpell[]} />
      <h1>Health Spells</h1>
      <SpellsTable spells={Health as GeneralSpell[]} />
      <h1>Illusion Spells</h1>
      <SpellsTable spells={Illusion as GeneralSpell[]} />
      <h1>Manipulation Spells</h1>
      <SpellsTable spells={Manipulation as GeneralSpell[]} />
    </>
  )
}
