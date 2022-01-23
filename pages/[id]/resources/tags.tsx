import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Tags = dynamic(
  () => import("@/components/runner/resources/electronics/Tags"),
  { ssr: false },
)

const TagsPage = () => (
  <RunnerLayout>
    <h1>RFID Tags</h1>
    <Tags />
  </RunnerLayout>
)
export default TagsPage
