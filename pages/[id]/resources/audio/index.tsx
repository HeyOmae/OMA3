import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Audio = dynamic(
  () => import("@/components/runner/resources/electronics/Audio"),
  {
    ssr: false,
  },
)

const AudioPage = () => (
  <RunnerLayout>
    <h1>Audio Devices</h1>
    <Audio />
  </RunnerLayout>
)

export default AudioPage
