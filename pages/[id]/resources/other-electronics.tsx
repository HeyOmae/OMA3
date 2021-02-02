import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const OtherElectronics = dynamic(
  () => import("@/components/runner/resources/electronics/OtherElectronics"),
  { ssr: false },
)

export default () => (
  <RunnerLayout>
    <h1>Other Electronics</h1>
    <OtherElectronics />
  </RunnerLayout>
)
