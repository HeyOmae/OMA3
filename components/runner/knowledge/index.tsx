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

const exampleLanguageSkills = [
  "Sperethiel",
  "Or'zet",
  "English",
  "Japanese",
  "Mandarin",
  "Russian",
  "French",
  "Italian",
  "German",
  "Aztlaner Spanish",
  "Spanish",
  "Lakota",
  "Dakota",
  "Diné",
]

const ADD_KNOWLEDGE = Symbol()
const REMOVE_KNOWLEDGE = Symbol()
const ADD_LANGUAGE = Symbol()
const REMOVE_LANGUAGE = Symbol()
const UPDATE_LANGUAGE_RATING = Symbol()

interface ReducerPayload {
  skill?: string | LanguageSkill
  index?: number
}

const KnowledgeSkills = () => {
  const [runner, dispatch] = useRunnerAccess<ReducerPayload>(
    (runner, { type, payload: { skill, index } }) => {
      // Forgive me future contributor for I have sinned while trying to be cleaver while writing this reducer.
      if (typeof skill === "string") {
        return {
          ...runner,
          knowledge: [...(runner?.knowledge ?? []), skill],
        }
      } else if (type === REMOVE_KNOWLEDGE) {
        return {
          ...runner,
          knowledge: removeItemFromArray<string>(runner.knowledge, index),
        }
      } else if (type === UPDATE_LANGUAGE_RATING) {
        return {
          ...runner,
          language: [
            ...runner.language.slice(0, index),
            skill,
            ...runner.language.slice(index + 1),
          ],
        }
      }

      return {
        ...runner,
        language:
          type === ADD_LANGUAGE
            ? [...(runner?.language ?? []), skill]
            : removeItemFromArray<LanguageSkill>(runner.language, index),
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
          removeSkill={(index: number) =>
            dispatch({
              type: REMOVE_KNOWLEDGE,
              payload: { index },
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
          removeSkill={(index: number) =>
            dispatch({
              type: REMOVE_LANGUAGE,
              payload: { index },
            })
          }
          changeRating={(skill, rating, index) =>
            dispatch({
              type: UPDATE_LANGUAGE_RATING,
              payload: { index, skill: { ...skill, rating } },
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
