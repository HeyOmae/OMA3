import { metamagic } from "@/data/metamagic"
import { MetamagicTable } from "./MetamagicTable"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { MetaMagic } from "@/types/MagRes"
import { CircularProgress, Grid } from "@mui/material"
import { RemainingKarma } from "../../resources/GearPageTemplate/RamainingKarma"
import { removeItemFromArray } from "@/components/util"

export const ADD_METAMAGIC = Symbol("ADD_METAMAGIC")
export const REMOVE_METAMAGIC = Symbol("REMOVE_METAMAGIC")

export interface Payload {
  metamagic?: MetaMagic
  index?: number
}

const Initiation = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(
    (runner, { payload, type }) => {
      if (type === ADD_METAMAGIC) {
        return {
          ...runner,
          initiation: [...(runner.initiation ?? []), payload.metamagic],
        }
      }
      return {
        ...runner,
        initiation: removeItemFromArray(runner.initiation, payload.index),
      }
    },
  )
  return runner ? (
    <section>
      <DisplayInitiationGrade initiation={runner.initiation} />
      <RemainingKarma runner={runner} />

      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <h2>Metamagics</h2>
          <MetamagicTable metamagics={metamagic} add dispatch={dispatch} />
        </Grid>
        <Grid item sm={12} md={6}>
          {runner.initiation && (
            <>
              <h2>Known Metamagics</h2>
              <MetamagicTable
                metamagics={runner.initiation}
                dispatch={dispatch}
              />
            </>
          )}
        </Grid>
      </Grid>
    </section>
  ) : (
    <CircularProgress />
  )
}

export const DisplayInitiationGrade = ({
  initiation = [],
}: {
  initiation: MetaMagic[]
}) => (
  <dl>
    <dt aria-label="Initiation Grade">Initiation Grade</dt>
    <dd aria-label="Initiation Grade Value">{initiation.length}</dd>
  </dl>
)

export default Initiation
