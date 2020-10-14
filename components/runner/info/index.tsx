import { useCallback, useRef } from "react"
import { Grid, TextField } from "@material-ui/core"
import { useRunnerAccess } from "../../../hooks/useRunnerAccess"
import { CircularProgress } from "@material-ui/core"
import { Runner } from "../../../types/runner"

export const Info = (): JSX.Element => {
  const reducer = useCallback((state: Runner, { type, payload }) => {
    switch (type) {
      case "updateName":
        return {
          ...state,
          name: payload,
        }
      case "updateDescription":
        return {
          ...state,
          description: payload,
        }
    }
  }, [])
  const name = useRef<HTMLInputElement>()
  const description = useRef<HTMLInputElement>()
  const [runner, dispatch] = useRunnerAccess<string, string>(reducer)

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
              dispatch({ type: "updateName", payload: name.current.value })
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
                type: "updateDescription",
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
