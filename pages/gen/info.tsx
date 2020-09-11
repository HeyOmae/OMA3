import { useRef, useCallback } from "react"
import { Layout } from "../../components/layout"
import { Grid, TextField } from "@material-ui/core"
import Link from "next/link"
import { useIndexedDB } from "react-indexed-db"

export const Info = () => {
  const {} = useIndexedDB("runners")
  const name = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const saveToIDB = useCallback(() => {
    console.log(name.current.value, description.current.value)
    // add({ name: name.current.value, description: description.current.value })
  }, [name.current?.value, description.current?.value])
  return (
    <Layout>
      <h1>Runner Info</h1>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              inputRef={name}
              id="runner--name"
              label="Runner's name"
              required
              fullWidth
              onBlur={saveToIDB}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={description}
              id="runner--description"
              label="Runner's description"
              multiline
              fullWidth
              rows={5}
              variant="outlined"
              onBlur={saveToIDB}
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
