import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Software = dynamic(
  () => import("@/components/runner/resources/electronics/Software"),
  { ssr: false },
)

const SoftwarePage = () => (
  <RunnerLayout>
    <h1>Software</h1>
    <Software />
  </RunnerLayout>
)
export default SoftwarePage
