import { createContext } from "react"
import { CircularProgress, Grid } from "@material-ui/core"
import { DispatchAction, useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { MagRes as MagicResonance, Spell } from "../../../types/MagRes"
import { MagResSelection } from "./MagResSelection"
import priorityData from "../../../data/priorityTable.json"
import { MagResPriorityTableOptions } from "../../../types/PriorityRating"
import { MagResAttributeSlider } from "./MagResAttributeSlider"
import { initRunnerAttribute } from "../../../types/runner"
import { PriorityWarning } from "../../priorityWarning"
import { Spells } from "./Spells"

export const DispatchProvider = createContext<DispatchAction<symbol, Payload>>(
  undefined,
)

export const SET_MAGRES = Symbol("SET_MAGRES")
export const SET_MAGIC = Symbol("SET_MAGIC")
export const SET_RESONANCE = Symbol("SET_RESONANCE")
export const SET_SPELL = Symbol("SET_SPELL")

export interface Payload {
  magres?: MagicResonance
  adjustment?: number
  spell?: Spell
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
          <MagResAttributeSlider
            adjustmentPoints={
              priorityData.metatypes[runner.priority.metatype].adjustmentPoints
            }
            attribute={priority[runner.magres][0]}
            min={priority[runner.magres][1]}
            max={6}
            attributes={runner.attributes}
            dispatch={dispatch}
          />
        ))}
      {runner.magres &&
        (runner.magres === "Full" ||
          runner.magres === "Aspected" ||
          runner.magres === "Mystic Adept") && (
          <DispatchProvider.Provider value={dispatch}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <h2>Spells</h2>
                <Spells />
              </Grid>
              <Grid item sm={12} md={6}>
                <h2>Known Spells</h2>
              </Grid>
            </Grid>
          </DispatchProvider.Provider>
        )}
    </>
  )
}

export default MagRes
