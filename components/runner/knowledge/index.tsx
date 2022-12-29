import { AddButton } from "@/components/common"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import { Autocomplete, CircularProgress, TextField } from "@mui/material"
import { useRef } from "react"

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
  "Weapons Manufacturers]",
]

const ADD_KNOWLEDGE = Symbol()

const KnowledgeSkills = () => {
  const skillRef = useRef<HTMLInputElement>()
  const [runner, dispatch] = useRunnerAccess<string>((runner, { payload }) => ({
    ...runner,
    knowledge: [...(runner?.knowledge ?? []), payload],
  }))
  return runner ? (
    <>
      <h2>Enter Knowledge Skill</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: ADD_KNOWLEDGE, payload: skillRef.current.value })
        }}
      >
        <Autocomplete<string, false, false, true>
          freeSolo
          options={exampleKnowledgeSkills}
          renderInput={(params) => (
            <TextField
              inputRef={skillRef}
              {...params}
              label="input knowledge skill"
            />
          )}
        />
        <AddButton type="submit" aria-label="submit" />
      </form>
      <h2>{runner.name ?? "Runner"}&apos;s Knowledge Skills</h2>
      <ul>
        {runner.knowledge?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  ) : (
    <CircularProgress />
  )
}

export default KnowledgeSkills
