import { CombatSpell, GeneralSpell } from "@/types/MagRes"
import { RunnerReducer } from "@/hooks/useRunnerAccess"
import { initRunnerAttribute, Runner } from "@/types/runner"
import { removeItemFromArray } from "@/components/util"
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

const handlers = new Map<symbol, Handler>([
  [
    SET_MAGRES,
    (runner, { magres }) => ({
      ...runner,
      magres,
      attributes: {
        ...runner.attributes,
        Magic: initRunnerAttribute,
        Resonance: initRunnerAttribute,
      },
    }),
  ],
  [
    SET_MAGIC,
    (runner, { adjustment }) => ({
      ...runner,
      attributes: {
        ...runner.attributes,
        Magic: { ...runner.attributes.Magic, adjustment },
      },
    }),
  ],
  [
    SET_RESONANCE,
    (runner, { adjustment }) => ({
      ...runner,
      attributes: {
        ...runner.attributes,
        Resonance: { ...runner.attributes.Resonance, adjustment },
      },
    }),
  ],
  [
    SET_SPELL,
    (runner, { spell }) => ({
      ...runner,
      spells: {
        ...runner.spells,
        [spell.category]: [...(runner.spells?.[spell.category] ?? []), spell],
      },
    }),
  ],
  [
    REMOVE_SPELL,
    (runner, { removeSpell: { spellCategory, spellIndex } }) => ({
      ...runner,
      spells: {
        ...runner.spells,
        [spellCategory]: removeItemFromArray<GeneralSpell | CombatSpell>(
          runner.spells[spellCategory],
          spellIndex,
        ),
      },
    }),
  ],
  [
    SET_RITUAL,
    (runner, { ritual }) => ({
      ...runner,
      rituals: [...(runner.rituals ?? []), ritual],
    }),
  ],
  [
    REMOVE_RITUAL,
    (runner, { removeRitual }) => ({
      ...runner,
      rituals: runner.rituals.toSpliced(removeRitual, 1),
    }),
  ],
  [
    SET_POWER,
    (runner, { power }) => ({
      ...runner,
      powers: [...(runner.powers ?? []), power],
    }),
  ],
  [
    REMOVE_POWER,
    (runner, { removePower }) => ({
      ...runner,
      powers: runner.powers.toSpliced(removePower, 1),
    }),
  ],
  [
    CHANGE_POWER_LEVEL,
    (runner, { powerLevel: { powerIndex, level } }) => ({
      ...runner,
      powers: runner.powers.toSpliced(powerIndex, 1, {
        ...runner.powers[powerIndex],
        level,
      }),
    }),
  ],
  [
    SET_COMPLEX_FORM,
    (runner, { complexForm }) => ({
      ...runner,
      complexForms: [...(runner.complexForms ?? []), complexForm],
    }),
  ],
  [
    REMOVE_COMPLEX_FORM,
    (runner, { removeComplexForm }) => ({
      ...runner,
      complexForms: runner.complexForms.toSpliced(removeComplexForm, 1),
    }),
  ],
])

export const magResReducer: RunnerReducer<Payload> = (
  runner,
  { type, payload },
) => handlers.get(type)(runner, payload)
