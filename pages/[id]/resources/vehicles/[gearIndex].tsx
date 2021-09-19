import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const VehicleMod = dynamic(
  () => import("@/components/runner/resources/Vehicles/VehicleMods"),
  {
    ssr: false,
  },
)

const VehicleModPage = () => (
  <RunnerLayout>
    <h1>Vehicle Mods</h1>
    <VehicleMod />
  </RunnerLayout>
)

export default VehicleModPage
