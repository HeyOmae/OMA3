import { Layout } from "../../components/layout"
import dynamic from "next/dynamic"

const Info = dynamic(() => import("../../components/runner/info"), {
  ssr: false,
})

export const InfoPage = (): JSX.Element => (
  <Layout>
    <h1>Runner Info</h1>
    <Info />
  </Layout>
)

export default Info
