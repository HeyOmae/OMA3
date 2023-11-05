import { RunnerLayout } from "@/components/layout"
import dynamic from "next/dynamic"

const CharacterSheet = dynamic(
  () => import("@/components/runner/CharacterSheet"),
  {
    ssr: false,
  },
)

const CharacterSheetPage = () => (
  <RunnerLayout>
    <CharacterSheet />
  </RunnerLayout>
)

export default CharacterSheetPage
