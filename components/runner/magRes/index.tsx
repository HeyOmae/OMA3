import { CircularProgress } from "@material-ui/core"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { MagRes as MagicResonance } from "../../../types/MagRes"
import { MagResSelection } from "./MagResSelection"
import priorityData from "../../../data/priorityTable.json"
import { MagResPriorityTableOptions } from "../../../types/PriorityRating"
import { MagResAttributeSlider } from "./MagResAttributeSlider"

export const SET_MAGRES = Symbol("SET_MAGRES")
export const SET_MAGIC = Symbol("SET_MAGIC")
export const SET_RESONANCE = Symbol("SET_RESONANCE")

export interface Payload {
  magres?: MagicResonance
  adjustment?: number
}

export const MagRes = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, Payload>(
    (runner, { type, payload }) => {
      switch (type) {
        case SET_MAGRES:
          return { ...runner, magres: payload.magres }
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
      }
    }
  )

  const priority = priorityData["mag/res"][
    runner?.priority["mag/res"]
  ] as MagResPriorityTableOptions

  return runner ? (
    <>
      <MagResSelection
        selected={runner.magres}
        dispatch={dispatch}
        priority={priority}
      />
      {runner.magres && (
        <MagResAttributeSlider
          attribute={priority[runner.magres][0]}
          min={priority[runner.magres][1]}
          max={6}
          adjustmentPoints={
            runner.attributes[priority[runner.magres][0]].adjustment
          }
          dispatch={dispatch}
        />
      )}
    </>
  ) : (
    <CircularProgress />
  )
}

export default MagRes
