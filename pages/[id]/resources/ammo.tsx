import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Ammo = dynamic(() => import("@/components/runner/resources/Ammo"), {
  ssr: false,
})

const AmmoPage = () => (
  <RunnerLayout>
    <h1>Ammo</h1>
    <Ammo />
  </RunnerLayout>
)

export default AmmoPage
