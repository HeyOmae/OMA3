import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Commlink = dynamic(
  () => import("@/components/runner/resources/Commlinks"),
  { ssr: false },
)

export default () => (
  <RunnerLayout>
    <h1>Commlinks</h1>
    <Commlink />
  </RunnerLayout>
)
