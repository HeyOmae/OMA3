import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Bioware = dynamic(() => import("@/components/runner/resources/Bioware"), {
  ssr: false,
})

const BiowarePage = () => (
  <RunnerLayout>
    <h1>Bioware</h1>
    <Bioware />
  </RunnerLayout>
)

export default BiowarePage
