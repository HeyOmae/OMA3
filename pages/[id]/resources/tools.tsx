import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Tools = dynamic(() => import("@/components/runner/resources/Tools"), {
  ssr: false,
})

export default () => (
  <RunnerLayout>
    <h1>Tools</h1>
    <Tools />
  </RunnerLayout>
)
