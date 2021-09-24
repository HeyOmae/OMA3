import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const DroneMod = dynamic(
  () => import("@/components/runner/resources/Drones/DroneMods"),
  {
    ssr: false,
  },
)

const DroneModPage = () => (
  <RunnerLayout>
    <h1>Drone Mods</h1>
    <DroneMod />
  </RunnerLayout>
)

export default DroneModPage
