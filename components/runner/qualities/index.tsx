import { negative, positive } from "@/data/qualities"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Quality } from "@/types/Qualities"
import { QualityTable, RunnerQualityTable } from "./QualityTable"
import { removeItemFromArray } from "@/components/util"
import { CircularProgress } from "@mui/material"
import { RemainingKarma } from "../resources/GearPageTemplate/RamainingKarma"

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
              runner.qualities[qualityKey],
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

  return runner ? (
    <>
      <RemainingKarma runner={runner} showQualityInfo />
      <section>
        <h2>Positive Qualities</h2>
        <QualityTable
          qualities={positive}
          onAddQuality={(quality) =>
            dispatch({ type: ADD_POSITIVE_QUALITY, payload: quality })
          }
        />
      </section>
      <section>
        <h2>Negative Qualities</h2>
        <QualityTable
          qualities={negative}
          onAddQuality={(quality) =>
            dispatch({ type: ADD_NEGATIVE_QUALITY, payload: quality })
          }
        />
      </section>
      <RemainingKarma runner={runner} />
      {runner?.qualities?.positive && (
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
      {runner?.qualities?.negative && (
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
    </>
  ) : (
    <CircularProgress />
  )
}

export default Qualities
