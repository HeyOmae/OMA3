import { PriorityWarning } from "@/components/priorityWarning"
import { defined, removeItemFromArray } from "@/components/util"
import { Runner } from "@/types/runner"
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
  knowledge?: string
  language?: LanguageSkill
  index?: number
}

type Handler = (runner: Runner, payload: ReducerPayload) => Runner

const handlers: Record<symbol, Handler> = {
  [ADD_KNOWLEDGE]: (runner, { knowledge }) => ({
    ...runner,
    knowledge: [...(runner.knowledge ?? []), defined(knowledge, "knowledge")],
  }),
  [REMOVE_KNOWLEDGE]: (runner, { index }) => ({
    ...runner,
    knowledge: removeItemFromArray(
      defined(runner.knowledge, "knowledge"),
      defined(index, "index"),
    ),
  }),
  [ADD_LANGUAGE]: (runner, { language }) => ({
    ...runner,
    language: [...(runner.language ?? []), defined(language, "language")],
  }),
  [REMOVE_LANGUAGE]: (runner, { index }) => ({
    ...runner,
    language: removeItemFromArray(
      defined(runner.language, "language"),
      defined(index, "index"),
    ),
  }),
  [UPDATE_LANGUAGE_RATING]: (runner, { index, language }) => ({
    ...runner,
    language: defined(runner.language, "language").toSpliced(
      defined(index, "index"),
      1,
      defined(language, "language"),
    ),
  }),
}

const KnowledgeSkills = () => {
  const [runner, dispatch] = useRunnerAccess<ReducerPayload>(
    (runner, { type, payload }) =>
      defined(handlers[type], type.toString())(runner, payload),
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
              payload: { knowledge: skill },
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
              payload: { language: { name: skill, rating: 1 } },
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
              payload: { index, language: { ...skill, rating } },
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
