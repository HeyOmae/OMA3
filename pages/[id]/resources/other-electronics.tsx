import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const OtherElectronics = dynamic(
  () => import("@/components/runner/resources/electronics/OtherElectronics"),
  { ssr: false },
)

const OtherEPage = () => (
  <RunnerLayout>
    <h1>Other Electronics</h1>
    <OtherElectronics />
  </RunnerLayout>
)

export default OtherEPage
