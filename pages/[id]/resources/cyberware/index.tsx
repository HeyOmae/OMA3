import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Cyberware = dynamic(
  () => import("@/components/runner/resources/Cyberware"),
  {
    ssr: false,
  },
)

const CyberwarePage = () => (
  <RunnerLayout>
    <h1>Cyberware</h1>
    <Cyberware />
  </RunnerLayout>
)

export default CyberwarePage
