import { useCallback, useRef } from "react"
import { Grid, TextField } from "@material-ui/core"
import { RunnerReducer, useRunnerAccess } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@material-ui/core"
import { Runner } from "@/types/runner"

const UPDATE_NAME = Symbol("updateName"),
  UPDATE_DESCRIPTION = Symbol("updateDescription")

export const Info = (): JSX.Element => {
  const reducer: RunnerReducer<string> = useCallback(
    (state: Runner, { type, payload }) => {
      switch (type) {
        case UPDATE_NAME:
          return {
            ...state,
            name: payload,
          }
        case UPDATE_DESCRIPTION:
          return {
            ...state,
            description: payload,
          }
      }
    },
    [],
  )
  const name = useRef<HTMLInputElement>()
  const description = useRef<HTMLInputElement>()
  const [runner, dispatch] = useRunnerAccess<string>(reducer)

  return runner ? (
    <form autoComplete="off">
      <Grid container>
        <Grid item xs={12}>
          <TextField
            inputRef={name}
            defaultValue={runner.name}
            id="runner--name"
            label="Runner's name"
            required
            fullWidth
            variant="filled"
            onBlur={() =>
              dispatch({ type: UPDATE_NAME, payload: name.current.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputRef={description}
            margin="normal"
            id="runner--description"
            label="Runner's description"
            multiline
            fullWidth
            rows={5}
            variant="filled"
            onBlur={() =>
              dispatch({
                type: UPDATE_DESCRIPTION,
                payload: description.current.value,
              })
            }
            defaultValue={runner.description}
          />
        </Grid>
      </Grid>
    </form>
  ) : (
    <CircularProgress />
  )
}

export default Info
