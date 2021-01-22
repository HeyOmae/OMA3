import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Tags = dynamic(
  () => import("@/components/runner/resources/electronics/Tags"),
  { ssr: false },
)

export default () => (
  <RunnerLayout>
    <h1>RFID Tags</h1>
    <Tags />
  </RunnerLayout>
)
