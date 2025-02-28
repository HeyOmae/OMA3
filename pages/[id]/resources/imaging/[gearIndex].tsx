import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const ImagingMod = dynamic(
  () => import("@/components/runner/resources/electronics/Imaging/ImagingMods"),
  {
    ssr: false,
  },
)

const ImageModPage = () => (
  <RunnerLayout>
    <h1>Imaging Mods</h1>
    <ImagingMod />
  </RunnerLayout>
)

export default ImageModPage
