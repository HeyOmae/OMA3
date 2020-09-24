import { RunnerLayout } from "../../components/layout"
import dynamic from "next/dynamic"

const Info = dynamic(() => import("../../components/runner/info"), {
  ssr: false,
})

export const InfoPage = (): JSX.Element => (
  <RunnerLayout>
    <h1>Runner Info</h1>
    <Info />
  </RunnerLayout>
)

export default InfoPage
