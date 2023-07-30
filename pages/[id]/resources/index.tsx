import { RunnerLayout } from "@/components/layout"
import NextLink from "next/link"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { GearNav } from "@/components/runner/resources/GearNav/GearNav"
import * as securityData from "@/data/security"
import * as magicGearData from "@/data/magicGear"
import dynamic from "next/dynamic"

const ResourceSummary = dynamic(
  () => import("@/components/runner/resources/ResourceSummary"),
  {
    ssr: false,
  },
)

const KarmaToNuyen = dynamic(
  () => import("@/components/runner/resources/KarmaToNuyen"),
  {
    ssr: false,
  },
)

export const ResourcePage = (): JSX.Element => {
  const { query, asPath } = useRouter()
  return (
    <RunnerLayout>
      <h1>Resources</h1>
      <KarmaToNuyen />
      <section>
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
      </section>
      <section>
        <h2>Armor</h2>
        <NextLink
          href="/[id]/resources/armor"
          as={`/${query.id}/resources/armor`}
          passHref
        >
          <Button variant="contained">Armors</Button>
        </NextLink>
      </section>
      <section>
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
        <NextLink
          href="/[id]/resources/eaccessories"
          as={`/${query.id}/resources/eaccessories`}
          passHref
        >
          <Button variant="contained">Electronic Accessories</Button>
        </NextLink>
        <NextLink
          href="/[id]/resources/tags"
          as={`/${query.id}/resources/tags`}
          passHref
        >
          <Button variant="contained">RFID Tags</Button>
        </NextLink>
        <NextLink
          href="/[id]/resources/other-electronics"
          as={`/${query.id}/resources/other-electronics`}
          passHref
        >
          <Button variant="contained">Other Electronics</Button>
        </NextLink>
        <NextLink
          href="/[id]/resources/tools"
          as={`/${query.id}/resources/tools`}
          passHref
        >
          <Button variant="contained">Tools</Button>
        </NextLink>
        <NextLink
          href="/[id]/resources/imaging"
          as={`/${query.id}/resources/imaging`}
          passHref
        >
          <Button variant="contained">Imaging Devices</Button>
        </NextLink>
        <NextLink href={`${asPath}/audio`} passHref>
          <Button variant="contained">Audio Devices</Button>
        </NextLink>
        <NextLink href={`${asPath}/sensor`} passHref>
          <Button variant="contained">Sensor Devices</Button>
        </NextLink>
      </section>
      <section>
        <h2>Security</h2>
        <GearNav pathTo={`${asPath}/security/`} gearData={securityData} />
      </section>
      <section>
        <h2>Biotech</h2>
        <NextLink href={`${asPath}/biotech`} passHref>
          <Button variant="contained">Biotech</Button>
        </NextLink>
      </section>
      <section>
        <h2>Magic Gear</h2>
        <NextLink href={`${asPath}/foci`} passHref>
          <Button variant="contained">Foci</Button>
        </NextLink>
        <GearNav pathTo={`${asPath}/magic/`} gearData={magicGearData} />
      </section>
      <section>
        <h2>Rigger Gear</h2>
        <NextLink href={`${asPath}/drones`} passHref>
          <Button variant="contained">Drones</Button>
        </NextLink>
        <NextLink href={`${asPath}/vehicles`} passHref>
          <Button variant="contained">Vehicles</Button>
        </NextLink>
      </section>
      <section>
        <h2>Augmentations</h2>
        <NextLink href={`${asPath}/cyberware`} passHref>
          <Button variant="contained">Cyberware</Button>
        </NextLink>
        <NextLink href={`${asPath}/bioware`} passHref>
          <Button variant="contained">Bioware</Button>
        </NextLink>
      </section>
      <section>
        <h2>Lifestyle</h2>
        <NextLink href={`${asPath}/lifestyle`} passHref>
          <Button variant="contained">Lifestyles</Button>
        </NextLink>
      </section>
      <ResourceSummary />
    </RunnerLayout>
  )
}

export default ResourcePage
