import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const RiggerConsoles = dynamic(
  () => import("@/components/runner/resources/electronics/RiggerConsoles"),
  { ssr: false },
)

export default () => (
  <RunnerLayout>
    <h1>Rigger Consoles</h1>
    <RiggerConsoles />
  </RunnerLayout>
)
