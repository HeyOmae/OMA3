import { FC, Fragment } from "react"
import { CombatSpells } from "./CombatSpells"
import {
  GeneralSpell,
  NonCombatSpellsCategory,
  Spells,
} from "../../../../types/MagRes"
import { SpellsTable } from "./SpellsTable"

interface Props {
  spells: Partial<Spells>
}

export const RunnerSpells: FC<Props> = ({
  spells: { Combat, ...nonCombatSpells },
}) => {
  return (
    <>
      {Combat && (
        <>
          <h3>Combat Spells</h3>
          <CombatSpells spells={Combat} />
        </>
      )}
      {Object.entries(nonCombatSpells).map(
        ([category, spells]: [
          category: NonCombatSpellsCategory,
          spells: GeneralSpell[],
        ]) => (
          <Fragment key={category}>
            <h3>{category}</h3>
            <SpellsTable spells={spells} />
          </Fragment>
        ),
      )}
    </>
  )
}
