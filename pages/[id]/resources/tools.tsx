import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Tools = dynamic(() => import("@/components/runner/resources/Tools"), {
  ssr: false,
})

const ToolsPage = () => (
  <RunnerLayout>
    <h1>Tools</h1>
    <Tools />
  </RunnerLayout>
)

export default ToolsPage
