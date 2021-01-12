import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Armor = dynamic(() => import("@/components/runner/resources/Armor"), {
  ssr: false,
})

export default () => (
  <RunnerLayout>
    <h1>Armors</h1>
    <Armor />
  </RunnerLayout>
)
