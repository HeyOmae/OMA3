import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const KnowledgeSkills = dynamic(() => import("@/components/runner/knowledge"), {
  ssr: false,
})

const KnowledgeSkillPage = () => (
  <RunnerLayout>
    <h1>Knowledge Skills</h1>
    <KnowledgeSkills />
  </RunnerLayout>
)

export default KnowledgeSkillPage
