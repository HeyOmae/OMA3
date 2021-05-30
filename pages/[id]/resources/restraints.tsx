import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Restraints = dynamic(
  () => import("@/components/runner/resources/security/Restraints"),
  {
    ssr: false,
  },
)

const RestraintsPage = () => (
  <RunnerLayout>
    <h1>Restraints</h1>
    <Restraints />
  </RunnerLayout>
)

export default RestraintsPage
