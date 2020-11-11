import { CombatSpells } from "./CombatSpells"
import { SpellsTable } from "./SpellsTable"
import {
  Combat,
  Detection,
  Health,
  Illusion,
  Manipulation,
} from "../../../../data/spells.json"
import { GeneralSpell, CombatSpell, Spell } from "../../../../types/MagRes"
import { Payload, SET_SPELL } from ".."
import { DispatchAction } from "../../../../hooks/useRunnerAccess"
import { FC } from "react"
import { AddButton } from "../../../common"
import { AccordionWrapper } from "../../../common/Accordion"

export interface Props {
  dispatch: DispatchAction<symbol, Payload>
}

export type ActionLabel = "Learn" | "Remove"

export interface AddSpellButtonProps {
  spell: Spell
  dispatch: DispatchAction<symbol, Payload>
  actionLabel: ActionLabel
}

const AddSpellButton: FC<AddSpellButtonProps> = ({
  spell,
  dispatch,
  actionLabel,
}) => (
  <AddButton
    aria-label={`${actionLabel} ${spell.name}`}
    onClick={() => {
      dispatch({ type: SET_SPELL, payload: { spell } })
    }}
  />
)

export const Spells: FC<Props> = ({ dispatch }) => {
  return (
    <>
      <AccordionWrapper label="combat-spells">
        <h3>Combat Spells</h3>
        <CombatSpells
          spells={Combat as CombatSpell[]}
          dispatch={dispatch}
          actionLabel="Learn"
          ActionButton={AddSpellButton}
        />
      </AccordionWrapper>
      <AccordionWrapper label="detection-spells">
        <h3>Detection Spells</h3>
        <SpellsTable
          spells={Detection as GeneralSpell[]}
          dispatch={dispatch}
          actionLabel="Learn"
          ActionButton={AddSpellButton}
        />
      </AccordionWrapper>
      <AccordionWrapper label="health-spells">
        <h3>Health Spells</h3>
        <SpellsTable
          spells={Health as GeneralSpell[]}
          dispatch={dispatch}
          actionLabel="Learn"
          ActionButton={AddSpellButton}
        />
      </AccordionWrapper>
      <AccordionWrapper label="illusion-spells">
        <h3>Illusion Spells</h3>
        <SpellsTable
          spells={Illusion as GeneralSpell[]}
          dispatch={dispatch}
          actionLabel="Learn"
          ActionButton={AddSpellButton}
        />
      </AccordionWrapper>
      <AccordionWrapper label="manipulation-spells">
        <h3>Manipulation Spells</h3>
        <SpellsTable
          spells={Manipulation as GeneralSpell[]}
          dispatch={dispatch}
          actionLabel="Learn"
          ActionButton={AddSpellButton}
        />
      </AccordionWrapper>
    </>
  )
}
