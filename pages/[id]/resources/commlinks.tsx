import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Commlink = dynamic(
  () => import("@/components/runner/resources/electronics/Commlinks"),
  { ssr: false },
)

const CommlinkPage = () => (
  <RunnerLayout>
    <h1>Commlinks</h1>
    <Commlink />
  </RunnerLayout>
)

export default CommlinkPage
