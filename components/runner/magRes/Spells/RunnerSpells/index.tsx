import { FC, Fragment } from "react"
import { CombatSpells } from "../CombatSpells"
import { Spell, SpellCategory, Spells } from "../../../../../types/MagRes"
import { defined } from "@/components/util"
import { SpellsTable } from "../SpellsTable"
import { DispatchAction } from "../../../../../hooks/useRunnerAccess"
import { Payload, REMOVE_SPELL } from "../.."
import { RemoveButton } from "../../../../common"

export interface RemoveSpellButtonProps {
  dispatch: DispatchAction<Payload>
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
  dispatch: DispatchAction<Payload>
}

export const RunnerSpells: FC<Props> = ({
  spells: { Combat, ...nonCombatSpells },
  dispatch,
}) => {
  const renderRemoveButton = (spell: Spell, spellIndex: number) => (
    <RemoveSpellButton
      dispatch={dispatch}
      actionLabel="Remove"
      spellCategory={spell.category}
      spellName={spell.name}
      spellIndex={spellIndex}
    />
  )
  return (
    <>
      {Combat && (
        <>
          <h3>Combat Spells</h3>
          <CombatSpells
            spells={Combat}
            actionLabel="Remove"
            renderAction={renderRemoveButton}
          />
        </>
      )}
      {Object.entries(nonCombatSpells).map(([category, spells]) => (
        <Fragment key={category}>
          <h3>{category}</h3>
          <SpellsTable
            spells={defined(spells, category)}
            actionLabel="Remove"
            renderAction={renderRemoveButton}
          />
        </Fragment>
      ))}
    </>
  )
}
