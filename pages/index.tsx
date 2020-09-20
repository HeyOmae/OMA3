import { FC } from "react"
import Head from "next/head"
import { Layout } from "../components/layout"
import { Button, Link } from "@material-ui/core"
import dynamic from "next/dynamic"
import { initRunner } from "../types/runner"
import { useRouter } from "next/router"
import NextLink from "next/link"

const AllRunnersAccess = dynamic(
  () => import("../components/allRunnersAccess"),
  {
    ssr: false,
  }
)

export const Home: FC = () => {
  const { push } = useRouter()
  return (
    <Layout>
      <Head>
        <title>OMAE 3.0</title>
      </Head>

      <main>
        <h1>Welcome to OMA3</h1>

        <p>
          Shadowrun 6<sup>th</sup> Edition Character Generator
        </p>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            window.alert("With typescript and Jest")
          }}
        >
          Test Button
        </Button>

        <AllRunnersAccess>
          {({ runners, add }) => (
            <div>
              <ul>
                {runners.map(({ name, id }) => {
                  const href = `${id}/info`
                  return (
                    <li key={id}>
                      <NextLink href="[id]/info" as={href} passHref>
                        <Link>{name}</Link>
                      </NextLink>
                    </li>
                  )
                })}
              </ul>
              <Button
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
      </main>
    </Layout>
  )
}

export default Home
