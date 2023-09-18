import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"
import { Breadcrumbs, Typography } from "@mui/material"
import NextLink from "next/link"
import { useRouter } from "next/router"

const Submersion = dynamic(
  () => import("@/components/runner/magRes/Submersion"),
  {
    ssr: false,
  },
)

export const SubmersionPage = () => {
  const { asPath } = useRouter()
  return (
    <RunnerLayout>
      <h1>Submersion</h1>
      <Breadcrumbs>
        <NextLink href={`/${asPath}/..`} passHref>
          Magic &amp; Resonance
        </NextLink>
        <Typography>Submersion</Typography>
      </Breadcrumbs>
      <Submersion />
    </RunnerLayout>
  )
}

export default SubmersionPage
