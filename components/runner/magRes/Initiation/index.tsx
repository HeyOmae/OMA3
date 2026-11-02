import { metamagic } from "@/data/metamagic"
import { MetamagicTable } from "./MetamagicTable"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { MetaMagic } from "@/types/MagRes"
import { CircularProgress, Grid } from "@mui/material"
import { RemainingKarma } from "../../resources/GearPageTemplate/RemainingKarma"
import { defined, removeItemFromArray } from "@/components/util"
import { AddButton, RemoveButton, Section } from "@/components/common"

export const ADD_METAMAGIC = Symbol("ADD_METAMAGIC")
export const REMOVE_METAMAGIC = Symbol("REMOVE_METAMAGIC")

// learning a metamagic, or forgetting the one at index
export interface Payload<M = MetaMagic> {
  metamagic?: M
  index?: number
}

const Initiation = () => {
  const [runner, dispatch] = useRunnerAccess<Payload>(
    (runner, { payload, type }) => {
      if (type === ADD_METAMAGIC) {
        return {
          ...runner,
          initiation: [
            ...(runner.initiation ?? []),
            defined(payload.metamagic, "metamagic"),
          ],
        }
      }
      return {
        ...runner,
        initiation: removeItemFromArray(
          defined(runner.initiation, "initiation"),
          defined(payload.index, "index"),
        ),
      }
    },
  )
  return runner ?
      <>
        <DisplayInitiationGrade initiation={runner.initiation} />
        <RemainingKarma runner={runner} />

        <Grid container spacing={2}>
          <Grid size={{ sm: 12, md: 6 }} component={Section}>
            <h2>Metamagics</h2>
            <MetamagicTable
              metamagics={metamagic}
              dispatch={dispatch}
              type={ADD_METAMAGIC}
              label="Learn"
              ActionButton={AddButton}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} component={Section}>
            {runner.initiation && (
              <>
                <h2>Known Metamagics</h2>
                <MetamagicTable
                  metamagics={runner.initiation}
                  dispatch={dispatch}
                  type={REMOVE_METAMAGIC}
                  label="Forget"
                  ActionButton={RemoveButton}
                />
              </>
            )}
          </Grid>
        </Grid>
      </>
    : <CircularProgress />
}

export const DisplayInitiationGrade = ({
  initiation = [],
}: {
  initiation?: MetaMagic[]
}) => (
  <dl>
    <dt aria-label="Initiation Grade">Initiation Grade</dt>
    <dd aria-label="Initiation Grade Value">{initiation.length}</dd>
  </dl>
)

export default Initiation
