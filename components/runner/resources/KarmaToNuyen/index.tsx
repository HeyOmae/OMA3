import { CircularProgress } from "@mui/material"
import { RemainingKarma } from "../GearPageTemplate/RamainingKarma"
import { RemainingNuyen } from "../GearPageTemplate/RemainingNuyen"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { AddButton, RemoveButton } from "@/components/common"

const INCREMENT_KARMA_TO_NUYEN = Symbol()
const DECREMENT_KARMA_TO_NUYEN = Symbol()

const KarmaToNuyen = () => {
  const [runner, dispatch] = useRunnerAccess<undefined | number>(
    (runner, { type }) => {
      switch (type) {
        case INCREMENT_KARMA_TO_NUYEN:
          return {
            ...runner,
            karmaToNuyen: (runner.karmaToNuyen ?? 0) + 1,
          }
        case DECREMENT_KARMA_TO_NUYEN:
          return {
            ...runner,
            karmaToNuyen: (runner.karmaToNuyen ?? 0) - 1,
          }
      }
    },
  )
  return runner ? (
    <>
      <RemainingKarma runner={runner} />
      <RemainingNuyen runner={runner} />
      <div>
        <AddButton
          aria-label="Increment Karma to Nuyen"
          onClick={() => dispatch({ type: INCREMENT_KARMA_TO_NUYEN })}
        />
        <label>
          Karma to Nuyen
          <input
            className={runner.karmaToNuyen < 0 ? "bad-stuff" : ""}
            type="number"
            value={runner.karmaToNuyen ?? 0}
            readOnly
          />
        </label>
        <RemoveButton
          aria-label="Decrement Karma to Nuyen"
          onClick={() => dispatch({ type: DECREMENT_KARMA_TO_NUYEN })}
        />
      </div>
    </>
  ) : (
    <CircularProgress />
  )
}

export default KarmaToNuyen
