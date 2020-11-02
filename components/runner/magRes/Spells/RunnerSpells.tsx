import { FC, Fragment } from "react"
import { CombatSpells } from "./CombatSpells"
import {
  GeneralSpell,
  NonCombatSpellsCategory,
  SpellCategory,
  Spells,
} from "../../../../types/MagRes"
import { SpellsTable } from "./SpellsTable"
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { Payload, REMOVE_SPELL } from ".."
import { RemoveButton } from "../../../common"

export interface RemoveSpellButtonProps {
  dispatch: DispatchAction<symbol, Payload>
  actionLabel: "Remove"
  spellName: string
  spellCategory: SpellCategory
  spellIndex: number
}

export const RemoveSpellButton: FC<RemoveSpellButtonProps> = ({
  spellName,
  dispatch,
  actionLabel,
  ...removeSpell
}) => (
  <RemoveButton
    aria-label={`${actionLabel} ${spellName}`}
    onClick={() =>
      dispatch({
        type: REMOVE_SPELL,
        payload: {
          removeSpell,
        },
      })
    }
  />
)

export interface Props {
  spells: Partial<Spells>
  dispatch: DispatchAction<symbol, Payload>
}

export const RunnerSpells: FC<Props> = ({
  spells: { Combat, ...nonCombatSpells },
  dispatch,
}) => {
  return (
    <>
      {Combat && (
        <>
          <h3>Combat Spells</h3>
          <CombatSpells
            spells={Combat}
            actionLabel="Remove"
            dispatch={dispatch}
            ActionButton={RemoveSpellButton}
          />
        </>
      )}
      {Object.entries(nonCombatSpells).map(
        ([category, spells]: [
          category: NonCombatSpellsCategory,
          spells: GeneralSpell[],
        ]) => (
          <Fragment key={category}>
            <h3>{category}</h3>
            <SpellsTable
              spells={spells}
              actionLabel="Remove"
              dispatch={dispatch}
              ActionButton={RemoveSpellButton}
            />
          </Fragment>
        ),
      )}
    </>
  )
}
