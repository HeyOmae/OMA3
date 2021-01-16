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
        href="/[id]/resources/melee"
        as={`/${query.id}/resources/melee`}
        passHref
      >
        <Button variant="contained">Melee Weapons</Button>
      </NextLink>
      <NextLink
        href="/[id]/resources/projectile"
        as={`/${query.id}/resources/projectile`}
        passHref
      >
        <Button variant="contained">Projectile Weapons</Button>
      </NextLink>
      <NextLink
        href="/[id]/resources/firearms"
        as={`/${query.id}/resources/firearms`}
        passHref
      >
        <Button variant="contained">Firearms</Button>
      </NextLink>
      <h2>Armor</h2>
      <NextLink
        href="/[id]/resources/armor"
        as={`/${query.id}/resources/armor`}
        passHref
      >
        <Button variant="contained">Armors</Button>
      </NextLink>
      <h2>Electronics</h2>
      <NextLink
        href="/[id]/resources/commlinks"
        as={`/${query.id}/resources/commlinks`}
        passHref
      >
        <Button variant="contained">Commlinks</Button>
      </NextLink>
      <NextLink
        href="/[id]/resources/cyberdecks"
        as={`/${query.id}/resources/cyberdecks`}
        passHref
      >
        <Button variant="contained">Cyberdecks</Button>
      </NextLink>
      <NextLink
        href="/[id]/resources/consoles"
        as={`/${query.id}/resources/consoles`}
        passHref
      >
        <Button variant="contained">Rigger Consoles</Button>
      </NextLink>
    </RunnerLayout>
  )
}

export default ResourcePage
