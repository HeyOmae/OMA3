import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const SensorMod = dynamic(
  () => import("@/components/runner/resources/electronics/Sensors/SensorMods"),
  {
    ssr: false,
  },
)

const SensorModPage = () => (
  <RunnerLayout>
    <h1>Sensor Mods</h1>
    <SensorMod />
  </RunnerLayout>
)

export default SensorModPage
