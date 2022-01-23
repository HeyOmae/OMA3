import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Biotech = dynamic(() => import("@/components/runner/resources/Biotech"), {
  ssr: false,
})

const BiotechPage = () => (
  <RunnerLayout>
    <h1>Biotechs</h1>
    <Biotech />
  </RunnerLayout>
)

export default BiotechPage
