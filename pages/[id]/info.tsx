import { Layout } from "../../components/layout"
import dynamic from "next/dynamic"
import NextLink from "next/link"
import { Link } from "@material-ui/core"

const Info = dynamic(() => import("../../components/runner/info"), {
  ssr: false,
})

export const InfoPage = (): JSX.Element => (
  <Layout>
    <h1>Runner Info</h1>
    <Info />
    <NextLink href="/" passHref>
      <Link>Back</Link>
    </NextLink>
  </Layout>
)

export default InfoPage
