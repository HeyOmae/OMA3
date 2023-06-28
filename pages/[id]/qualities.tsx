import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Qualities = dynamic(() => import("@/components/runner/qualities"), {
  ssr: false,
})

const QualityPage = () => (
  <RunnerLayout>
    <h1>Qualities</h1>
    <Qualities />
  </RunnerLayout>
)

export default QualityPage
