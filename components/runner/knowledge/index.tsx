import { PriorityWarning } from "@/components/priorityWarning"
import { removeItemFromArray } from "@/components/util"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { LanguageSkill } from "@/types/Skill"
import { CircularProgress } from "@mui/material"
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

const exampleLanguageSkills = []

const ADD_KNOWLEDGE = Symbol()
const REMOVE_KNOWLEDGE = Symbol()
const ADD_LANGUAGE = Symbol()
const REMOVE_LANGUAGE = Symbol()

interface ReducerPayload {
  skill?: string | LanguageSkill
  removeIndex?: number
}

const KnowledgeSkills = () => {
  const [runner, dispatch] = useRunnerAccess<ReducerPayload>(
    (runner, { type, payload: { skill, removeIndex } }) => {
      if (typeof skill === "string") {
        return {
          ...runner,
          knowledge: [...(runner?.knowledge ?? []), skill],
        }
      } else if (type === REMOVE_KNOWLEDGE) {
        return {
          ...runner,
          knowledge: removeItemFromArray<string>(runner.knowledge, removeIndex),
        }
      }

      return {
        ...runner,
        language:
          type === ADD_LANGUAGE
            ? [...(runner?.language ?? []), skill]
            : removeItemFromArray<LanguageSkill>(runner.language, removeIndex),
      }
    },
  )
  if (!runner) {
    return <CircularProgress />
  } else if (!runner.attributes?.Logic) {
    return <PriorityWarning requirement="attributes" />
  } else {
    return (
      <>
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
        />
        <SkillSection
          runner={runner}
          addSkill={(skill: string) =>
            dispatch({
              type: ADD_LANGUAGE,
              payload: { skill: { name: skill, rating: 1 } },
            })
          }
          removeSkill={(removeIndex: number) =>
            dispatch({
              type: REMOVE_LANGUAGE,
              payload: { removeIndex },
            })
          }
          exampleOptions={exampleLanguageSkills}
          skillKey="language"
        />
      </>
    )
  }
}

export default KnowledgeSkills
