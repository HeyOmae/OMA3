import { AddButton, RemoveButton, Section } from "@/components/common"
import { CircularProgress, Grid } from "@mui/material"
import { MetamagicTable } from "../Initiation/MetamagicTable"
import { echoes } from "@/data/echoes"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Payload } from "../Initiation"
import { removeItemFromArray } from "@/components/util"

const LEARN_ECHO = Symbol("LEARN_ECHO")
const FORGET_ECHO = Symbol("FORGET_ECHO")

const Submersion = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(
    (runner, { type, payload }) => {
      if (type === LEARN_ECHO) {
        return {
          ...runner,
          submersion: [...(runner.submersion ?? []), payload.metamagic],
        }
      }
      return {
        ...runner,
        submersion: removeItemFromArray(runner.submersion, payload.index),
      }
    },
  )
  return runner ? (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} component={Section}>
          <h2>Echoes</h2>
          <MetamagicTable
            metamagics={echoes}
            label="Learn"
            ActionButton={AddButton}
            dispatch={dispatch}
            type={LEARN_ECHO}
          />
        </Grid>
        {runner.submersion && (
          <Grid item sm={12} md={6} component={Section}>
            <h2>Known Echoes</h2>
            <MetamagicTable
              metamagics={runner.submersion}
              label="Forget"
              ActionButton={RemoveButton}
              dispatch={dispatch}
              type={FORGET_ECHO}
            />
          </Grid>
        )}
      </Grid>
    </>
  ) : (
    <CircularProgress />
  )
}

export default Submersion
