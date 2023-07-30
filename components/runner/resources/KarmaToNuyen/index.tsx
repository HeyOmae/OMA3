import { CircularProgress, TextField } from "@mui/material"
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
    <section>
      <h2>Karma &amp; Nuyen</h2>
      <div>
        <AddButton
          aria-label="Increment Karma to Nuyen"
          onClick={() => dispatch({ type: INCREMENT_KARMA_TO_NUYEN })}
        />
        <TextField
          label="Karma to Nuyen"
          className={runner.karmaToNuyen < 0 ? "bad-stuff" : ""}
          type="number"
          value={runner.karmaToNuyen ?? 0}
        />
        <RemoveButton
          aria-label="Decrement Karma to Nuyen"
          onClick={() => dispatch({ type: DECREMENT_KARMA_TO_NUYEN })}
        />
      </div>
      <RemainingKarma runner={runner} />
      <RemainingNuyen runner={runner} />
    </section>
  ) : (
    <CircularProgress />
  )
}

export default KarmaToNuyen
