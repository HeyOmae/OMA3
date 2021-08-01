import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Foci = dynamic(() => import("@/components/runner/resources/Foci"), {
  ssr: false,
})

const FociPage = () => (
  <RunnerLayout>
    <h1>Foci</h1>
    <Foci />
  </RunnerLayout>
)

export default FociPage
