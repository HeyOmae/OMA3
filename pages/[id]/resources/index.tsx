import { RunnerLayout } from "../../../components/layout"
import NextLink from "next/link"
import { Button } from "@material-ui/core"
import { useRouter } from "next/router"

export const ResourcePage = (): JSX.Element => {
  const { query } = useRouter()
  return (
    <RunnerLayout>
      <h1>Resources</h1>
      <NextLink
        href="./resources/[category]"
        as={`/${query.id}/resources/weapons`}
        passHref
      >
        <Button variant="contained" color="primary">
          weapons
        </Button>
      </NextLink>
    </RunnerLayout>
  )
}

export default ResourcePage
