import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Sensor = dynamic(
  () => import("@/components/runner/resources/electronics/Sensors"),
  {
    ssr: false,
  },
)

const SensorPage = () => (
  <RunnerLayout>
    <h1>Sensor Devices</h1>
    <Sensor />
  </RunnerLayout>
)

export default SensorPage
