import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Vehicles = dynamic(
  () => import("@/components/runner/resources/Vehicles"),
  {
    ssr: false,
  },
)

const vehiclesPage = () => (
  <RunnerLayout>
    <h1>Vehicles</h1>
    <Vehicles />
  </RunnerLayout>
)

export default vehiclesPage
