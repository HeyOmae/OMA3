import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Lifestyle = dynamic(
  () => import("@/components/runner/resources/Lifestyle"),
  {
    ssr: false,
  },
)

const LifestylePage = () => (
  <RunnerLayout>
    <h1>Life Styles</h1>
    <Lifestyle />
  </RunnerLayout>
)

export default LifestylePage
