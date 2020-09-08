import { Layout } from "../../components/layout"
import { Grid, TextField, Button } from "@material-ui/core"
import { Save } from "@material-ui/icons"

export const Info = () => (
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="runner--description"
            label="Runner's description"
            multiline
            fullWidth
            rows={5}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" startIcon={<Save />}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  </Layout>
)

export default Info
