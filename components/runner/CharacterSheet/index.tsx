import { useGetRunner } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@mui/material"
import { AttributeTable } from "./AttributeTable"

const CharacterSheet = () => {
  const runner = useGetRunner()

  return runner ? (
    <>
      <h1>{runner.name}</h1>
      <AttributeTable runner={runner} />
    </>
  ) : (
    <CircularProgress />
  )
}

export default CharacterSheet
