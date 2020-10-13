import { useCallback } from "react"
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
  const [runner, dispatch, save] = useRunnerAccess<string, string>(reducer)

  const saveToIDB = useCallback(() => {
    save(runner)
  }, [runner])

  return runner ? (
    <form autoComplete="off">
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="runner--name"
            label="Runner's name"
            required
            fullWidth
            variant="filled"
            onBlur={saveToIDB}
            value={runner.name}
            onChange={({ target }) =>
              dispatch({ type: "updateName", payload: target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            id="runner--description"
            label="Runner's description"
            multiline
            fullWidth
            rows={5}
            variant="filled"
            onBlur={saveToIDB}
            value={runner.description}
            onChange={({ target }) =>
              dispatch({ type: "updateDescription", payload: target.value })
            }
          />
        </Grid>
      </Grid>
    </form>
  ) : (
    <CircularProgress />
  )
}

export default Info
