import { useCallback } from "react"
import { Layout } from "../../components/layout"
import { Grid, TextField } from "@material-ui/core"
import Link from "next/link"
import { useRunnerAccess } from "../../hooks/useRunnerAccess"
import { CircularProgress } from "@material-ui/core"

export const Info = (): JSX.Element => {
  const reducer = useCallback((state, { type, payload }) => {
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

      default:
        return state
    }
  }, [])
  const [runner, dispatch, save] = useRunnerAccess(reducer)

  const saveToIDB = useCallback(() => {
    console.log("taco")
    // add({ name: name.current.value, description: description.current.value })
  }, [])

  return runner ? (
    <Layout>
      <h1>Runner Info</h1>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="runner--name"
              label="Runner's name"
              required
              fullWidth
              onBlur={saveToIDB}
              value={runner.name}
              onChange={({ target }) =>
                dispatch({ type: "updateName", payload: target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="runner--description"
              label="Runner's description"
              multiline
              fullWidth
              rows={5}
              variant="outlined"
              onBlur={saveToIDB}
              value={runner.description}
              onChange={({ target }) =>
                dispatch({ type: "updateDescription", payload: target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Link href="/">
              <a>Back</a>
            </Link>
          </Grid>{" "}
        </Grid>
      </form>
    </Layout>
  ) : (
    <CircularProgress />
  )
}

export default Info
