import { RunnerLayout } from "../../components/layout"
import dynamic from "next/dynamic"

const PriorityTable = dynamic(
  () => import("../../components/runner/priorityTable"),
  { ssr: false }
)

export const PriorityPage = () => (
  <RunnerLayout>
    <h1>Priority Table</h1>
    <PriorityTable />
  </RunnerLayout>
)

export default PriorityPage
