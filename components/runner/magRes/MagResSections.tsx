import { FC } from "react"
import { Button } from "@mui/material"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { MagRes } from "@/types/MagRes"
import { Runner } from "@/types/runner"
import { AccordionWrapper } from "../../common/Accordion"
import { AdeptPowers } from "./AdeptPowers"
import { RunnerAdeptPowers } from "./AdeptPowers/RunnerAdeptPowers"
import { ComplexForms } from "./ComplexForms"
import { RunnerComplexForms } from "./ComplexForms/RunnerComplexForms"
import { DisplayInitiationGrade } from "./Initiation"
import { Payload } from "./magResActions"
import { Rituals } from "./Rituals"
import { RunnerRituals } from "./Rituals/RunnerRituals"
import { Spells } from "./Spells"
import { RunnerSpells } from "./Spells/RunnerSpells"
import { DisplaySubmersionLevel } from "./Submersion"

interface DispatchProps {
  dispatch: DispatchAction<Payload>
}

interface RunnerProps extends DispatchProps {
  runner: Runner
}

const castsSpells = (magres?: MagRes) =>
  magres !== undefined && ["Full", "Aspected", "Mystic Adept"].includes(magres)

const usesAdeptPowers = (magres?: MagRes) =>
  magres !== undefined && ["Mystic Adept", "Adept"].includes(magres)

// what the runner can learn, depending on how they are awakened
export const LearnableMagRes: FC<RunnerProps> = ({
  runner: { magres },
  dispatch,
}) => (
  <>
    {castsSpells(magres) && (
      <>
        <h2>Spells</h2>
        <Spells dispatch={dispatch} />

        <AccordionWrapper label="rituals">
          <h2>Rituals</h2>
          <Rituals dispatch={dispatch} />
        </AccordionWrapper>
      </>
    )}
    {usesAdeptPowers(magres) && (
      <AccordionWrapper label="adept-powers">
        <h2>Adept Powers</h2>
        <AdeptPowers dispatch={dispatch} />
      </AccordionWrapper>
    )}
    {magres === "Technomancer" && (
      <AccordionWrapper label="complex-forms">
        <h2>Complex Forms</h2>
        <ComplexForms dispatch={dispatch} />
      </AccordionWrapper>
    )}
  </>
)

// what the runner has already learned
export const KnownMagRes: FC<RunnerProps> = ({
  runner: { spells, rituals, powers, complexForms },
  dispatch,
}) => (
  <>
    {spells && (
      <section>
        <h2>Known Spells</h2>
        <RunnerSpells spells={spells} dispatch={dispatch} />
      </section>
    )}
    {rituals && (
      <section>
        <h2>Known Rituals</h2>
        <RunnerRituals dispatch={dispatch} rituals={rituals} />
      </section>
    )}
    {powers && (
      <section>
        <h2>Known Adept Powers</h2>
        <RunnerAdeptPowers powers={powers} dispatch={dispatch} />
      </section>
    )}
    {complexForms && (
      <section>
        <h2>Known Complex Forms</h2>
        <RunnerComplexForms complexForms={complexForms} dispatch={dispatch} />
      </section>
    )}
  </>
)

export const GrowthSections: FC<{ runner: Runner }> = ({
  runner: { initiation, submersion, magres },
}) => {
  const { asPath } = useRouter()

  return (
    <>
      {(initiation?.length ||
        castsSpells(magres) ||
        usesAdeptPowers(magres)) && (
        <section>
          <h2>Initiation</h2>
          <DisplayInitiationGrade initiation={initiation} />
          <NextLink href={`${asPath}/initiation`} passHref>
            <Button variant="contained">Initiation</Button>
          </NextLink>
        </section>
      )}
      {(submersion?.length || magres === "Technomancer") && (
        <section>
          <h2>Submersion</h2>
          <DisplaySubmersionLevel submersion={submersion} />
          <NextLink href={`${asPath}/submersion`} passHref>
            <Button variant="contained">Submersion</Button>
          </NextLink>
        </section>
      )}
    </>
  )
}
