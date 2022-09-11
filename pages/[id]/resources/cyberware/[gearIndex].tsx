import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const CyberwareMod = dynamic(
  () => import("@/components/runner/resources/Cyberware/CyberwareMod"),
  {
    ssr: false,
  },
)

const CyberwareModPage = () => (
  <RunnerLayout>
    <h1>Cyberware Mods</h1>
    <CyberwareMod />
  </RunnerLayout>
)

export default CyberwareModPage
