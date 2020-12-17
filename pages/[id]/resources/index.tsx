import { RunnerLayout } from "../../../components/layout"
import NextLink from "next/link"
import { Button } from "@material-ui/core"
import { useRouter } from "next/router"

export const ResourcePage = (): JSX.Element => {
  const { query } = useRouter()
  return (
    <RunnerLayout>
      <h1>Resources</h1>
      <h2>Weapons</h2>
      <NextLink
        href="./resources/[category]"
        as={`/${query.id}/resources/melee`}
        passHref
      >
        <Button variant="contained" color="primary">
          Melee Weapons
        </Button>
      </NextLink>
      <NextLink
        href="./resources/[category]"
        as={`/${query.id}/resources/projectile`}
        passHref
      >
        <Button variant="contained" color="primary">
          Projectile Weapons
        </Button>
      </NextLink>
    </RunnerLayout>
  )
}

export default ResourcePage
