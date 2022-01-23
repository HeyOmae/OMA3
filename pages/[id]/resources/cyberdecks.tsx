import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Cyberdecks = dynamic(
  () => import("@/components/runner/resources/electronics/Cyberdecks"),
  { ssr: false },
)

const CyberdeckPage = () => (
  <RunnerLayout>
    <h1>Cyberdecks</h1>
    <Cyberdecks />
  </RunnerLayout>
)

export default CyberdeckPage
