import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const Skills = dynamic(() => import("@/components/runner/skills"), {
  ssr: false,
})

export const SkillPage = () => (
  <RunnerLayout>
    <h1>Skills</h1>
    <Skills />
  </RunnerLayout>
)

export default SkillPage
