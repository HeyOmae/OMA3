import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const MagRes = dynamic(() => import("@/components/runner/magRes"), {
  ssr: false,
})

export const MagResPage = () => (
  <RunnerLayout>
    <h1>Magic & Resonance</h1>
    <MagRes />
  </RunnerLayout>
)

export default MagResPage
