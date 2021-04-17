import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const AudioMod = dynamic(
  () => import("@/components/runner/resources/electronics/Audio/AudioMods"),
  {
    ssr: false,
  },
)

const AudioModPage = () => (
  <RunnerLayout>
    <h1>Audio Mods</h1>
    <AudioMod />
  </RunnerLayout>
)

export default AudioModPage
