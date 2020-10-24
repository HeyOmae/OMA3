import { CircularProgress } from "@material-ui/core"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { MagRes as MagicResonance } from "../../../types/MagRes"
import { MagResSelection } from "./MagResSelection"

export const SET_MAGRES = Symbol("SET_MAGRES")

interface Payload {
  magres?: MagicResonance
}

export const MagRes = () => {
  const [runner, dispatch] = useRunnerAccess<symbol, Payload>(
    (runner, { type, payload }) => {
      switch (type) {
        case SET_MAGRES:
          return { ...runner, magres: payload.magres }
      }
    }
  )

  return runner ? (
    <>
      <MagResSelection selected={runner.magres} dispatch={dispatch} />
    </>
  ) : (
    <CircularProgress />
  )
}

export default MagRes
