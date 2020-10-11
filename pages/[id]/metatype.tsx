import { RunnerLayout } from "../../components/layout"
import dynamic from "next/dynamic"

const Metatype = dynamic(() => import("../../components/runner/metatype"), {
  ssr: false,
})

export const MetatypePage = () => (
  <RunnerLayout>
    <h1>Metatype</h1>
    <Metatype />
  </RunnerLayout>
)

export default MetatypePage
