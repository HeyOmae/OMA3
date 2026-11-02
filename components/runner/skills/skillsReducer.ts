import { RunnerReducer } from "@/hooks/useRunnerAccess"
import { Runner } from "@/types/runner"
import { Skill } from "@/types/Skill"
import { defined } from "@/components/util"
import {
  ActionPayload,
  ADD_SKILL,
  CHANGE_EXPERTISE,
  CHANGE_SKILL_RATING,
  CHANGE_SKILL_RATING_WITH_KARMA,
  CHANGE_SPECIALIZATION,
  REMOVE_SKILL,
} from "./skillsActions"

type Handler = (runner: Runner, payload: ActionPayload) => Runner

// changes one of the runner's skills
const updateSkill = (
  runner: Runner,
  name: string,
  update: (skill: Skill) => Partial<Skill>,
): Runner => {
  const skill = defined(runner.skills?.[name], name)
  return {
    ...runner,
    skills: { ...runner.skills, [name]: { ...skill, ...update(skill) } },
  }
}

const handlers: Record<symbol, Handler> = {
  [ADD_SKILL]: (runner, { skillToAdd }) => ({
    ...runner,
    skills: { ...runner.skills, ...skillToAdd },
  }),
  [REMOVE_SKILL]: (runner, { skillToRemove }) => {
    const {
      [defined(skillToRemove, "skillToRemove")]: removedSkill,
      ...skills
    } = defined(runner.skills, "skills")
    return { ...runner, skills }
  },
  // rating bought with skill points, on top of any bought with karma
  [CHANGE_SKILL_RATING]: (runner, { skillToChangeRating }) => {
    const { name, rating } = defined(skillToChangeRating, "skillToChangeRating")
    return updateSkill(runner, name, ({ karmaRating = 0 }) => ({
      rating: Math.max(rating - karmaRating, 0),
    }))
  },
  // rating bought with karma, on top of the skill points spent
  [CHANGE_SKILL_RATING_WITH_KARMA]: (runner, { skillToChangeRating }) => {
    const { name, rating } = defined(skillToChangeRating, "skillToChangeRating")
    return updateSkill(runner, name, (skill) => ({
      karmaRating: Math.max(rating - skill.rating, 0),
    }))
  },
  [CHANGE_SPECIALIZATION]: (runner, { specializationChange }) => {
    const { name, specialization } = defined(
      specializationChange,
      "specializationChange",
    )
    return updateSkill(runner, name, () => ({ specialization }))
  },
  [CHANGE_EXPERTISE]: (runner, { specializationChange }) => {
    const { name, specialization } = defined(
      specializationChange,
      "specializationChange",
    )
    return updateSkill(runner, name, () => ({ expertise: specialization }))
  },
}

// an action nothing handles is a bug, so it fails loudly
export const skillsReducer: RunnerReducer<ActionPayload> = (
  runner,
  { type, payload },
) => defined(handlers[type], type.toString())(runner, payload)
