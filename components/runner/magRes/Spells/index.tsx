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
import { Payload } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { FC } from "react"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
}

export const Spells: FC<Props> = ({ dispatch }) => {
  return (
    <>
      <h3>Combat Spells</h3>
      <CombatSpells spells={Combat as CombatSpell[]} dispatch={dispatch} />
      <h3>Detection Spells</h3>
      <SpellsTable spells={Detection as GeneralSpell[]} dispatch={dispatch} />
      <h3>Health Spells</h3>
      <SpellsTable spells={Health as GeneralSpell[]} dispatch={dispatch} />
      <h3>Illusion Spells</h3>
      <SpellsTable spells={Illusion as GeneralSpell[]} dispatch={dispatch} />
      <h3>Manipulation Spells</h3>
      <SpellsTable
        spells={Manipulation as GeneralSpell[]}
        dispatch={dispatch}
      />
    </>
  )
}
