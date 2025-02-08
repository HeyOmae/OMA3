import { useGetRunner } from "@/hooks/useRunnerAccess"
import { Alert, CircularProgress } from "@mui/material"
import { AttributeTable } from "./AttributeTable"
import { Runner } from "@/types/runner"
import { GearTable } from "./GearTables"

const CharacterSheet = () => {
  const runner = useGetRunner()

  return runner ?
      <>
        <Alert severity="warning">work in Progress!</Alert>
        <h1>{runner.name}</h1>
        <AttributeTable runner={runner} />
        <GearTable runner={runner} />
      </>
    : <CircularProgress />
}

export default CharacterSheet

export interface CharSheetTableProps {
  runner: Runner
}
