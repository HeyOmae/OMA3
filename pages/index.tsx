import { FC } from "react"
import Head from "next/head"
import { Layout } from "@/components/layout"
import { Button, IconButton, Link } from "@material-ui/core"
import dynamic from "next/dynamic"
import { initRunner } from "@/types/runner"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { GitHub } from "@material-ui/icons"

const AllRunnersAccess = dynamic(
  () => import("@/components/allRunnersAccess"),
  {
    ssr: false,
  },
)

export const Home: FC = () => {
  const { push } = useRouter()
  return (
    <Layout>
      <Head>
        <title>OMAE 3.0</title>
      </Head>

      <h1>Welcome to OMA3</h1>

      <small>
        Shadowrun 6<sup>th</sup> Edition Character Generator
      </small>

      <p>
        This is a web app for generating Shadowrun 6th Characters. You&apos;ll
        need the core rule book to make sense out of any of this. You can
        purchase a copy{" "}
        <a href="https://www.drivethrurpg.com/product/286850/Shadowrun-Sixth-World-Core-Rulebook">
          here
        </a>
        .
      </p>

      <h2>List of Runners</h2>
      <AllRunnersAccess>
        {({ runners, add }) => (
          <div>
            <ul>
              {runners.map(({ name, id }) => {
                const href = `${id}/info`
                return (
                  <li key={id}>
                    <NextLink href="[id]/info" as={href} passHref>
                      <Link>{name || id}</Link>
                    </NextLink>
                  </li>
                )
              })}
            </ul>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                add(initRunner).then((event) => {
                  push("/[id]/info", `/${event}/info`)
                })
              }}
            >
              Create Runner
            </Button>
          </div>
        )}
      </AllRunnersAccess>

      <section>
        <h2>Contribute</h2>
        <p>
          Looking for something to help with. Check out the{" "}
          <a href="https://github.com/HeyOmae/OMA3/projects">project board.</a>
        </p>
        <p>
          Notice a bug?{" "}
          <a href="https://github.com/HeyOmae/OMA3/issues">Create an issue.</a>
        </p>
        <IconButton href="https://github.com/HeyOmae/OMA3">
          <GitHub />
        </IconButton>
      </section>
    </Layout>
  )
}

export default Home
