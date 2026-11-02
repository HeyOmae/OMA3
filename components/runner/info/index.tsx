import { CircularProgress, Grid, TextField } from "@mui/material"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"

const UPDATE_NAME = Symbol("updateName"),
  UPDATE_DESCRIPTION = Symbol("updateDescription")

export const Info = (): JSX.Element => {
  const [runner, dispatch] = useRunnerAccess<string>(
    (state, { type, payload }) =>
      type === UPDATE_NAME ?
        { ...state, name: payload }
      : { ...state, description: payload },
  )
  return runner ?
      <form autoComplete="off">
        <Grid container>
          <Grid size={12}>
            <TextField
              defaultValue={runner.name}
              id="runner--name"
              label="Runner's name"
              required
              fullWidth
              variant="filled"
              onBlur={({ target: { value } }) =>
                dispatch({ type: UPDATE_NAME, payload: value })
              }
            />
          </Grid>
          <Grid size={12}>
            <TextField
              margin="normal"
              id="runner--description"
              label="Runner's description"
              multiline
              fullWidth
              rows={5}
              variant="filled"
              onBlur={({ target: { value } }) =>
                dispatch({ type: UPDATE_DESCRIPTION, payload: value })
              }
              defaultValue={runner.description}
            />
          </Grid>
        </Grid>
      </form>
    : <CircularProgress />
}

export default Info
