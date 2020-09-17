import { useCallback, useEffect, useState } from "react"
import { Layout } from "../../components/layout"
import { Grid, TextField } from "@material-ui/core"
import Link from "next/link"
import { useIndexedDB } from "react-indexed-db"
import { useRouter } from "next/router"
import { Runner } from "../../types/runner"

export const Info = () => {
  const { getByID, update } = useIndexedDB("runners")
  const router = useRouter()
  const [runnerName, setRunnerName] = useState<string>("")
  const [runnerDescription, setRunnerDescription] = useState<string>("")

  useEffect(() => {
    const { id } = router.query
    getByID<Runner>(id as string).then((loadedRunner) => {
      if (loadedRunner) {
        setRunnerName(loadedRunner.name)
        setRunnerDescription(loadedRunner.description)
      }
    })
  }, [])

  const saveToIDB = useCallback(() => {
    console.log("taco")
    // add({ name: name.current.value, description: description.current.value })
  }, [])

  return (
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
              value={runnerName}
              onChange={({ target }) => setRunnerName(target.value)}
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
              value={runnerDescription}
              onChange={({ target }) => setRunnerDescription(target.value)}
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
  )
}

export default Info
