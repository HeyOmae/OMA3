import { PriorityWarning } from "@/components/priorityWarning"
import { removeItemFromArray } from "@/components/util"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { CircularProgress } from "@mui/material"
import { RemainingKnowledgePoints } from "./RemainingKnowledgePoints"
import { SkillSection } from "./SkillSection"

const exampleKnowledgeSkills = [
  "Aerospace Technology",
  "Arcana",
  "[Area] Gangs",
  "Automobile Models",
  "Combat Biker",
  "Corporate Personalities",
  "Espionage Techniques",
  "Hacker Groups",
  "Law Enforcement Corps",
  "Magical Societies",
  "Magical Traditions",
  "Metaplanes",
  "[Nation] Politics",
  "Ork Cuisine",
  "Orkxploitation Music",
  "[Region/Era] History",
  "Security Systems",
  "Sixth World History",
  "Spirit Types",
  "[Sprawl] Streets",
  "Tech Companies",
  "Trideo Series",
  "Troll Thrash Rock",
  "Urban Brawl",
  "Virtual Nightclubs",
  "Weapons Manufacturers",
]

const ADD_KNOWLEDGE = Symbol()
const REMOVE_KNOWLEDGE = Symbol()

interface ReducerPayload {
  skill?: string
  removeIndex?: number
}

const KnowledgeSkills = () => {
  const [runner, dispatch] = useRunnerAccess<ReducerPayload>(
    (runner, { type, payload: { skill, removeIndex } }) => ({
      ...runner,
      knowledge:
        type === ADD_KNOWLEDGE
          ? [...(runner?.knowledge ?? []), skill]
          : removeItemFromArray<string>(runner.knowledge, removeIndex),
    }),
  )
  if (!runner) {
    return <CircularProgress />
  } else if (!runner.attributes?.Logic) {
    return <PriorityWarning requirement="attributes" />
  } else {
    const remainingKnowledgePoints = (
      <RemainingKnowledgePoints runner={runner} />
    )

    return (
      <SkillSection
        runner={runner}
        addSkill={(skill: string) =>
          dispatch({
            type: ADD_KNOWLEDGE,
            payload: { skill },
          })
        }
        removeSkill={(removeIndex: number) =>
          dispatch({
            type: REMOVE_KNOWLEDGE,
            payload: { removeIndex },
          })
        }
        exampleOptions={exampleKnowledgeSkills}
        skillKey="knowledge"
        remainingKnowledgePoints={remainingKnowledgePoints}
      />
    )
  }
}

export default KnowledgeSkills
