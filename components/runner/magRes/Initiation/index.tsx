import { metamagic } from "@/data/metamagic"
import { MetamagicTable } from "./MetamagicTable"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { MetaMagic } from "@/types/MagRes"
import { CircularProgress } from "@mui/material"
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
    <>
      <dl>
        <dt aria-label="Initiation Grade">Initiation Grade</dt>
        <dd aria-label="Initiation Grade Value">
          {(runner.initiation ?? []).length}
        </dd>
      </dl>
      <RemainingKarma runner={runner} />
      <MetamagicTable metamagics={metamagic} add dispatch={dispatch} />
      {runner.initiation && (
        <MetamagicTable metamagics={runner.initiation} dispatch={dispatch} />
      )}
    </>
  ) : (
    <CircularProgress />
  )
}

export default Initiation