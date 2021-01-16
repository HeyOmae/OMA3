import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Cyberdecks = dynamic(
  () => import("@/components/runner/resources/electronics/Cyberdecks"),
  { ssr: false },
)

export default () => (
  <RunnerLayout>
    <h1>Cyberdecks</h1>
    <Cyberdecks />
  </RunnerLayout>
)
