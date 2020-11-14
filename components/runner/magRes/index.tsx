import { CircularProgress, Grid } from "@material-ui/core"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import {
  AdeptPower,
  MagRes as MagicResonance,
  Ritual,
  Spell,
  SpellCategory,
} from "../../../types/MagRes"
import { MagResSelection } from "./MagResSelection"
import priorityData from "../../../data/priorityTable.json"
import { MagResPriorityTableOptions } from "../../../types/PriorityRating"
import { MagResAttributeSlider } from "./MagResAttributeSlider"
import { initRunnerAttribute } from "../../../types/runner"
import { PriorityWarning } from "../../priorityWarning"
import { Spells } from "./Spells"
import { RunnerSpells } from "./Spells/RunnerSpells"
import { RemainingSpells } from "./RemainingSpells"
import styles from "./magRes.module.css"
import { Rituals } from "./Rituals"
import { RunnerRituals } from "./Rituals/RunnerRituals"
import { AccordionWrapper } from "../../common/Accordion"
import { AdeptPowers } from "./AdeptPowers"

export const SET_MAGRES = Symbol("SET_MAGRES")
export const SET_MAGIC = Symbol("SET_MAGIC")
export const SET_RESONANCE = Symbol("SET_RESONANCE")
export const SET_SPELL = Symbol("SET_SPELL")
export const REMOVE_SPELL = Symbol("REMOVE_SPELL")
export const SET_RITUAL = Symbol("SET_RITUAL")
export const REMOVE_RITUAL = Symbol("REMOVE_RITUAL")
export const SET_POWER = Symbol("SET_POWER")

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
}

export const MagRes = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, Payload>(
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
              [spellCategory]: [
                ...runner.spells[spellCategory].slice(0, spellIndex),
                ...runner.spells[spellCategory].slice(spellIndex + 1),
              ],
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
  } else if (!runner.attributes) {
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
                  spells={runner.spells}
                  rating={priority[runner.magres][1]}
                  rituals={runner.rituals}
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
              </Grid>
            </Grid>
          </>
        ))}
    </>
  )
}

export default MagRes
