import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"
import { Breadcrumbs, Typography } from "@mui/material"
import NextLink from "next/link"
import { useRouter } from "next/router"

const Initiation = dynamic(
  () => import("@/components/runner/magRes/Initiation"),
  {
    ssr: false,
  },
)

export const InitationPage = () => {
  const { asPath } = useRouter()
  return (
    <RunnerLayout>
      <h1>Initiation</h1>
      <Breadcrumbs>
        <NextLink href={`/${asPath}/..`} passHref>
          Magic &amp; Resonance
        </NextLink>
        <Typography>Initiation</Typography>
      </Breadcrumbs>
      <Initiation />
    </RunnerLayout>
  )
}

export default InitationPage
