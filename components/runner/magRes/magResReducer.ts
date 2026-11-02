import { CombatSpell, GeneralSpell, Spell, Spells } from "@/types/MagRes"
import { RunnerReducer } from "@/hooks/useRunnerAccess"
import { initRunnerAttribute, Runner } from "@/types/runner"
import { defined, removeItemFromArray } from "@/components/util"
import {
  CHANGE_POWER_LEVEL,
  Payload,
  REMOVE_COMPLEX_FORM,
  REMOVE_POWER,
  REMOVE_RITUAL,
  REMOVE_SPELL,
  SET_COMPLEX_FORM,
  SET_MAGIC,
  SET_MAGRES,
  SET_POWER,
  SET_RESONANCE,
  SET_RITUAL,
  SET_SPELL,
} from "./magResActions"

type Handler = (runner: Runner, payload: Payload) => Runner

// Combat spells and the other spells are kept in lists of their own type
const addSpell = (
  spells: Partial<Spells> = {},
  spell: Spell,
): Partial<Spells> =>
  spell.category === "Combat" ?
    { ...spells, Combat: [...(spells.Combat ?? []), spell] }
  : { ...spells, [spell.category]: [...(spells[spell.category] ?? []), spell] }

const handlers: Record<symbol, Handler> = {
  [SET_MAGRES]: (runner, { magres }) => ({
    ...runner,
    magres,
    attributes: {
      ...runner.attributes,
      Magic: initRunnerAttribute,
      Resonance: initRunnerAttribute,
    },
  }),
  [SET_MAGIC]: (runner, { adjustment }) => ({
    ...runner,
    attributes: {
      ...runner.attributes,
      Magic: {
        ...defined(runner.attributes?.Magic, "Magic"),
        adjustment: defined(adjustment, "adjustment"),
      },
    },
  }),
  [SET_RESONANCE]: (runner, { adjustment }) => ({
    ...runner,
    attributes: {
      ...runner.attributes,
      Resonance: {
        ...defined(runner.attributes?.Resonance, "Resonance"),
        adjustment: defined(adjustment, "adjustment"),
      },
    },
  }),
  [SET_SPELL]: (runner, { spell }) => ({
    ...runner,
    spells: addSpell(runner.spells, defined(spell, "spell")),
  }),
  [REMOVE_SPELL]: (runner, { removeSpell }) => {
    const { spellCategory, spellIndex } = defined(removeSpell, "removeSpell")
    return {
      ...runner,
      spells: {
        ...runner.spells,
        [spellCategory]: removeItemFromArray<GeneralSpell | CombatSpell>(
          defined(runner.spells?.[spellCategory], spellCategory),
          spellIndex,
        ),
      },
    }
  },
  [SET_RITUAL]: (runner, { ritual }) => ({
    ...runner,
    rituals: [...(runner.rituals ?? []), defined(ritual, "ritual")],
  }),
  [REMOVE_RITUAL]: (runner, { removeRitual }) => ({
    ...runner,
    rituals: defined(runner.rituals, "rituals").toSpliced(
      defined(removeRitual, "removeRitual"),
      1,
    ),
  }),
  [SET_POWER]: (runner, { power }) => ({
    ...runner,
    powers: [...(runner.powers ?? []), defined(power, "power")],
  }),
  [REMOVE_POWER]: (runner, { removePower }) => ({
    ...runner,
    powers: defined(runner.powers, "powers").toSpliced(
      defined(removePower, "removePower"),
      1,
    ),
  }),
  [CHANGE_POWER_LEVEL]: (runner, { powerLevel }) => {
    const { powerIndex, level } = defined(powerLevel, "powerLevel")
    const powers = defined(runner.powers, "powers")
    return {
      ...runner,
      powers: powers.toSpliced(powerIndex, 1, {
        ...powers[powerIndex],
        level,
      }),
    }
  },
  [SET_COMPLEX_FORM]: (runner, { complexForm }) => ({
    ...runner,
    complexForms: [
      ...(runner.complexForms ?? []),
      defined(complexForm, "complexForm"),
    ],
  }),
  [REMOVE_COMPLEX_FORM]: (runner, { removeComplexForm }) => ({
    ...runner,
    complexForms: defined(runner.complexForms, "complexForms").toSpliced(
      defined(removeComplexForm, "removeComplexForm"),
      1,
    ),
  }),
}

// an action nothing handles is a bug, so it fails loudly
export const magResReducer: RunnerReducer<Payload> = (
  runner,
  { type, payload },
) => defined(handlers[type], type.toString())(runner, payload)
