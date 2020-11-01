import { CombatSpells } from "./CombatSpells"
import { SpellsTable } from "./SpellsTable"
import {
  Combat,
  Detection,
  Health,
  Illusion,
  Manipulation,
} from "../../../../data/spells.json"
import { GeneralSpell, CombatSpell } from "../../../../types/MagRes"

export const Spells = () => {
  return (
    <>
      <h3>Combat Spells</h3>
      <CombatSpells spells={Combat as CombatSpell[]} />
      <h3>Detection Spells</h3>
      <SpellsTable spells={Detection as GeneralSpell[]} />
      <h3>Health Spells</h3>
      <SpellsTable spells={Health as GeneralSpell[]} />
      <h3>Illusion Spells</h3>
      <SpellsTable spells={Illusion as GeneralSpell[]} />
      <h3>Manipulation Spells</h3>
      <SpellsTable spells={Manipulation as GeneralSpell[]} />
    </>
  )
}
