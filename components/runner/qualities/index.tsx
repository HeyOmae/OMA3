import { negative, positive } from "@/data/qualities"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Quality } from "@/types/Qualities"
import { QualityTable, RunnerQualityTable } from "./QualityTable"
import { defined, removeItemFromArray } from "@/components/util"
import { CircularProgress } from "@mui/material"
import { RemainingKarma } from "../resources/GearPageTemplate/RemainingKarma"
import { useNotify } from "@/components/layout/hud"

// where the runner's qualities are listed, for the notice to point at
const RUNNER_QUALITIES_ID = "runner-qualities"

const ADD_POSITIVE_QUALITY = Symbol()
const REMOVE_POSITIVE_QUALITY = Symbol()
const ADD_NEGATIVE_QUALITY = Symbol()
const REMOVE_NEGATIVE_QUALITY = Symbol()

const Qualities = () => {
  const [runner, dispatch] = useRunnerAccess<Quality | number>(
    (runner, { type, payload }) => {
      if (typeof payload === "number") {
        const qualityKey =
          type === REMOVE_POSITIVE_QUALITY ? "positive" : "negative"
        return {
          ...runner,
          qualities: {
            ...runner.qualities,
            [qualityKey]: removeItemFromArray<Quality>(
              defined(runner.qualities?.[qualityKey], qualityKey),
              payload,
            ),
          },
        }
      }
      const qualityKey = type === ADD_POSITIVE_QUALITY ? "positive" : "negative"
      return {
        ...runner,
        qualities: {
          ...(runner?.qualities ?? {}),
          [qualityKey]: [...(runner?.qualities?.[qualityKey] ?? []), payload],
        },
      }
    },
  )

  const notify = useNotify()
  const addQuality = (type: symbol) => (quality: Quality) => {
    dispatch({ type, payload: quality })
    notify({ message: `Added ${quality.name}`, target: RUNNER_QUALITIES_ID })
  }

  return runner ?
      <>
        <RemainingKarma runner={runner} showQualityInfo />
        {/* the runner's qualities come first, so what was added is easy to find */}
        <div id={RUNNER_QUALITIES_ID}>
          {runner.qualities?.positive && (
            <section>
              <h2>{runner.name}&apos;s Positive Qualities</h2>
              <RunnerQualityTable
                qualities={runner.qualities.positive}
                onRemoveQualitiy={(index) =>
                  dispatch({ type: REMOVE_POSITIVE_QUALITY, payload: index })
                }
              />
            </section>
          )}
          {runner.qualities?.negative && (
            <section>
              <h2>{runner.name}&apos;s Negative Qualities</h2>
              <RunnerQualityTable
                qualities={runner.qualities.negative}
                onRemoveQualitiy={(index) =>
                  dispatch({ type: REMOVE_NEGATIVE_QUALITY, payload: index })
                }
              />
            </section>
          )}
        </div>
        <section>
          <h2>Positive Qualities</h2>
          <QualityTable
            qualities={positive}
            onAddQuality={addQuality(ADD_POSITIVE_QUALITY)}
          />
        </section>
        <section>
          <h2>Negative Qualities</h2>
          <QualityTable
            qualities={negative}
            onAddQuality={addQuality(ADD_NEGATIVE_QUALITY)}
          />
        </section>
      </>
    : <CircularProgress />
}

export default Qualities
