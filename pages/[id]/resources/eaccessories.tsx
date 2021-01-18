import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const ElectronicAccessories = dynamic(
  () =>
    import("@/components/runner/resources/electronics/ElectronicAccessories"),
  { ssr: false },
)

export default () => (
  <RunnerLayout>
    <h1>Electronic Accessories</h1>
    <ElectronicAccessories />
  </RunnerLayout>
)
