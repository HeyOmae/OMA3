import { RunnerReducer } from "@/hooks/useRunnerAccess"
import { initRunnerAttributes, Runner } from "@/types/runner"
import { AttributeStats, Attributes } from "@/types/RunnerAttributes"
import { isAwakened } from "@/types/MagRes"
import { startingMagResRating } from "@/data/priorityTable"
import { defined } from "@/components/util"
import {
  Payload,
  SET_METATYPE,
  SPEND_ADJUSTMENT_POINTS,
  SPEND_ATTRIBUTE_POINTS,
  SPEND_KARMA,
} from "./metatypeActions"

type Handler = (runner: Runner, payload: Payload) => Runner

// The slider sets the attribute's total, so what's spent on one kind of
// points is the total less the other kinds
const spend =
  (
    spentOn: keyof AttributeStats,
    otherPoints: (attribute: AttributeStats) => number,
  ) =>
  (runner: Runner, { key, value }: Payload): Runner => {
    const attributeKey: Attributes = defined(key, "attribute")
    const attribute = defined(runner.attributes?.[attributeKey], attributeKey)
    const newValue = defined(value, "value") - otherPoints(attribute)
    return {
      ...runner,
      attributes: {
        ...runner.attributes,
        [attributeKey]: { ...attribute, [spentOn]: Math.max(newValue, 0) },
      },
    }
  }

const spendAdjustment = spend(
  "adjustment",
  ({ points, karma = 0 }) => points + karma,
)

const handlers: Record<symbol, Handler> = {
  [SET_METATYPE]: (runner, { metatype }) => ({
    ...runner,
    metatype,
    attributes: initRunnerAttributes,
  }),
  [SPEND_ATTRIBUTE_POINTS]: spend(
    "points",
    ({ adjustment, karma = 0 }) => adjustment + karma,
  ),
  [SPEND_ADJUSTMENT_POINTS]: (runner, payload) =>
    // only karma can raise magic past 6
    (
      payload.key === "Magic" &&
      isAwakened(runner.magres) &&
      defined(payload.value, "value") +
        startingMagResRating(runner.priority, runner.magres) >
        6
    ) ?
      runner
    : spendAdjustment(runner, payload),
  [SPEND_KARMA]: spend(
    "karma",
    ({ points, adjustment }) => points + adjustment,
  ),
}

// an action nothing handles is a bug, so it fails loudly
export const metatypeReducer: RunnerReducer<Payload> = (
  runner,
  { type, payload },
) => defined(handlers[type], type.toString())(runner, payload)
