import { FC } from "react"
import Head from "next/head"
import { Layout } from "@/components/layout"
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import dynamic from "next/dynamic"
import { initRunner } from "@/types/runner"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { GitHub } from "@mui/icons-material"
import ReleaseNotes from "@/components/ReleaseNotes"
import DownloadModal from "@/components/DownloadModal"
import { UploadModal } from "@/components/UploadModal"

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
        <a href="https://www.drivethrurpg.com/en/product/460386/shadowrun-sixth-world-core-rulebook-city-edition-berlin">
          here
        </a>
        .
      </p>

      <h2>List of Runners</h2>
      <AllRunnersAccess>
        {({ runners, add }) => (
          <div>
            <TableContainer>
              <Table aria-label="Table of Runners">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell width="100px" align="center">
                      Download
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {runners.map((runner) => {
                    const { id, name } = runner,
                      href = `${id}/info`
                    return (
                      <TableRow key={id}>
                        <TableCell>
                          <NextLink href="[id]/info" as={href} passHref>
                            {name || id}
                          </NextLink>
                        </TableCell>
                        <TableCell align="center">
                          <DownloadModal runner={runner} />
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
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
            <UploadModal add={add} push={push} />
          </div>
        )}
      </AllRunnersAccess>

      <section>
        <h2>Contribute</h2>
        <p>
          Looking for something to help with. Check out the{" "}
          <a href="https://github.com/HeyOmae/OMA3/projects?type=classic">
            project board.
          </a>
        </p>
        <p>
          Notice a bug?{" "}
          <a href="https://github.com/HeyOmae/OMA3/issues">Create an issue.</a>
        </p>
        <IconButton href="https://github.com/HeyOmae/OMA3">
          <GitHub />
        </IconButton>
      </section>
      <section>
        <h2>Release Notes</h2>
        <ReleaseNotes />
      </section>
    </Layout>
  )
}

export default Home
