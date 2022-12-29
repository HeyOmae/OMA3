import { CircularProgress, Grid } from "@mui/material"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import {
  AdeptPower,
  CombatSpell,
  ComplexForm,
  GeneralSpell,
  MagRes as MagicResonance,
  Ritual,
  Spell,
  SpellCategory,
} from "@/types/MagRes"
import { MagResSelection } from "./MagResSelection"
import priorityData from "@/data/priorityTable.json"
import { MagResPriorityTableOptions } from "@/types/PriorityRating"
import { MagResAttributeSlider } from "./MagResAttributeSlider"
import { initRunnerAttribute } from "@/types/runner"
import { PriorityWarning } from "../../priorityWarning"
import { Spells } from "./Spells"
import { RunnerSpells } from "./Spells/RunnerSpells"
import { RemainingSpells } from "./RemainingSpells"
import styles from "./magRes.module.css"
import { Rituals } from "./Rituals"
import { RunnerRituals } from "./Rituals/RunnerRituals"
import { AccordionWrapper } from "../../common/Accordion"
import { AdeptPowers } from "./AdeptPowers"
import { RunnerAdeptPowers } from "./AdeptPowers/RunnerAdeptPowers"
import { ComplexForms } from "./ComplexForms"
import { RunnerComplexForms } from "./ComplexForms/RunnerComplexForms"
import { removeItemFromArray } from "@/components/util"

// TODO: The complexity in this component is a code smell. Refactor things out in to smaller files
export const SET_MAGRES = Symbol("SET_MAGRES")
export const SET_MAGIC = Symbol("SET_MAGIC")
export const SET_RESONANCE = Symbol("SET_RESONANCE")
export const SET_SPELL = Symbol("SET_SPELL")
export const REMOVE_SPELL = Symbol("REMOVE_SPELL")
export const SET_RITUAL = Symbol("SET_RITUAL")
export const REMOVE_RITUAL = Symbol("REMOVE_RITUAL")
export const SET_POWER = Symbol("SET_POWER")
export const REMOVE_POWER = Symbol("REMOVE_POWER")
export const CHANGE_POWER_LEVEL = Symbol("CHANGE_POWER_LEVEL")
export const SET_COMPLEX_FORM = Symbol("SET_COMPLEX_FORM")
export const REMOVE_COMPLEX_FORM = Symbol("REMOVE_COMPLEX_FORM")

export interface Payload {
  magres?: MagicResonance
  adjustment?: number
  spell?: Spell
  removeSpell?: {
    spellCategory: SpellCategory
    spellIndex: number
  }
  ritual?: Ritual
  removeRitual?: number
  power?: AdeptPower
  removePower?: number
  powerLevel?: {
    powerIndex: number
    level: number
  }
  complexForm?: ComplexForm
  removeComplexForm?: number
}

export const MagRes = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(
    (runner, { type, payload }) => {
      switch (type) {
        case SET_MAGRES:
          return {
            ...runner,
            magres: payload.magres,
            attributes: {
              ...runner.attributes,
              Magic: initRunnerAttribute,
              Resonance: initRunnerAttribute,
            },
          }
        case SET_MAGIC:
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              Magic: {
                ...runner.attributes.Magic,
                adjustment: payload.adjustment,
              },
            },
          }
        case SET_RESONANCE:
          return {
            ...runner,
            attributes: {
              ...runner.attributes,
              Resonance: {
                ...runner.attributes.Resonance,
                adjustment: payload.adjustment,
              },
            },
          }
        case SET_SPELL:
          return {
            ...runner,
            spells: {
              ...runner.spells,
              [payload.spell.category]: [
                ...(runner.spells?.[payload.spell.category] ?? []),
                payload.spell,
              ],
            },
          }

        case REMOVE_SPELL: {
          const {
            removeSpell: { spellCategory, spellIndex },
          } = payload
          return {
            ...runner,
            spells: {
              ...runner.spells,
              [spellCategory]: removeItemFromArray<GeneralSpell | CombatSpell>(
                runner.spells[spellCategory],
                spellIndex,
              ),
            },
          }
        }
        case SET_RITUAL:
          return {
            ...runner,
            rituals: [...(runner.rituals ?? []), payload.ritual],
          }
        case REMOVE_RITUAL:
          return {
            ...runner,
            rituals: [
              ...runner.rituals.slice(0, payload.removeRitual),
              ...runner.rituals.slice(payload.removeRitual + 1),
            ],
          }
        case SET_POWER:
          return {
            ...runner,
            powers: [...(runner.powers ?? []), payload.power],
          }
        case REMOVE_POWER:
          return {
            ...runner,
            powers: [
              ...runner.powers.slice(0, payload.removePower),
              ...runner.powers.slice(payload.removePower + 1),
            ],
          }
        case CHANGE_POWER_LEVEL: {
          const { powerIndex, level } = payload.powerLevel

          return {
            ...runner,
            powers: [
              ...runner.powers.slice(0, powerIndex),
              { ...runner.powers[powerIndex], level },
              ...runner.powers.slice(powerIndex + 1),
            ],
          }
        }
        case SET_COMPLEX_FORM:
          return {
            ...runner,
            complexForms: [...(runner.complexForms ?? []), payload.complexForm],
          }
        case REMOVE_COMPLEX_FORM:
          return {
            ...runner,
            complexForms: [
              ...runner.complexForms.slice(0, payload.removeComplexForm),
              ...runner.complexForms.slice(payload.removeComplexForm + 1),
            ],
          }
      }
    },
  )

  // This is kind of ugly. Refactor later or something
  if (!runner) {
    return <CircularProgress />
  } else if (!runner.priority?.metatype) {
    return <PriorityWarning requirement="metatype" />
  } else if (!runner.priority["mag/res"]) {
    return <PriorityWarning requirement="mag/res" />
  } else if (!runner.attributes && runner.priority["mag/res"] !== "E") {
    return <PriorityWarning requirement="attributes" />
  }
  const priority = priorityData["mag/res"][
    runner.priority["mag/res"]
  ] as MagResPriorityTableOptions

  return (
    <>
      <MagResSelection
        selected={runner.magres}
        dispatch={dispatch}
        priority={priority}
      />
      {runner.magres &&
        (runner.magres === "Mundane" ? (
          <h1>Nothing Special Here...</h1>
        ) : (
          <>
            <MagResAttributeSlider
              adjustmentPoints={
                priorityData.metatypes[runner.priority.metatype]
                  .adjustmentPoints
              }
              attribute={priority[runner.magres][0]}
              min={priority[runner.magres][1]}
              max={6}
              attributes={runner.attributes}
              dispatch={dispatch}
            />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RemainingSpells
                  magRes={runner.magres}
                  rating={priority[runner.magres][1]}
                  adjustmentPoints={runner.attributes.Magic.adjustment}
                  spells={runner.spells}
                  rituals={runner.rituals}
                  powers={runner.powers}
                  complexForms={runner.complexForms}
                />
              </Grid>
              <Grid item sm={12} md={6} className={styles.scrollGrid}>
                {(runner.magres === "Full" ||
                  runner.magres === "Aspected" ||
                  runner.magres === "Mystic Adept") && (
                  <>
                    <h2>Spells</h2>
                    <Spells dispatch={dispatch} />

                    <AccordionWrapper label="rituals">
                      <h2>Rituals</h2>
                      <Rituals dispatch={dispatch} />
                    </AccordionWrapper>
                  </>
                )}
                {(runner.magres === "Mystic Adept" ||
                  runner.magres === "Adept") && (
                  <AccordionWrapper label="adept-powers">
                    <h2>Adept Powers</h2>
                    <AdeptPowers dispatch={dispatch} />
                  </AccordionWrapper>
                )}
                {runner.magres === "Technomancer" && (
                  <AccordionWrapper label="complex-forms">
                    <h2>Complex Forms</h2>
                    <ComplexForms dispatch={dispatch} />
                  </AccordionWrapper>
                )}
              </Grid>
              <Grid item sm={12} md={6} className={styles.scrollGrid}>
                {runner.spells && (
                  <>
                    <h2>Known Spells</h2>
                    <RunnerSpells spells={runner.spells} dispatch={dispatch} />
                  </>
                )}
                {runner.rituals && (
                  <>
                    <h2>Known Rituals</h2>
                    <RunnerRituals
                      dispatch={dispatch}
                      rituals={runner.rituals}
                    />
                  </>
                )}
                {runner.powers && (
                  <>
                    <h2>Known Adept Powers</h2>
                    <RunnerAdeptPowers
                      powers={runner.powers}
                      dispatch={dispatch}
                    />
                  </>
                )}
                {runner.complexForms && (
                  <>
                    <h2>Known Complex Forms</h2>
                    <RunnerComplexForms
                      complexForms={runner.complexForms}
                      dispatch={dispatch}
                    />
                  </>
                )}
              </Grid>
            </Grid>
          </>
        ))}
    </>
  )
}

export default MagRes
