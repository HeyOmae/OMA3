import dynamic from "next/dynamic"
import { RunnerLayout } from "@/components/layout"

const Imaging = dynamic(
  () => import("@/components/runner/resources/electronics/Imaging"),
  {
    ssr: false,
  },
)

const ImagingPage = () => (
  <RunnerLayout>
    <h1>Imaging Devices</h1>
    <Imaging />
  </RunnerLayout>
)

export default ImagingPage
