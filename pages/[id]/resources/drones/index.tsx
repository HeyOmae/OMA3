import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Drones = dynamic(() => import("@/components/runner/resources/Drones"), {
  ssr: false,
})

const dronesPage = () => (
  <RunnerLayout>
    <h1>Drones</h1>
    <Drones />
  </RunnerLayout>
)

export default dronesPage
