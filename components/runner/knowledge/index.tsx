import { AddButton, RemoveButton } from "@/components/common"
import { PriorityWarning } from "@/components/priorityWarning"
import { removeItemFromArray } from "@/components/util"
import { useRunnerAccess } from "@/hooks/useRunnerAccess"
import {
  Autocomplete,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { useRef } from "react"
import styles from "./knowledge.module.css"

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

const KnowledgeSkills = () => {
  const skillInputRef = useRef<HTMLInputElement>()
  const skillFormRef = useRef<HTMLFormElement>()
  const [runner, dispatch] = useRunnerAccess<{
    knowledge?: string
    removeIndex?: number
  }>((runner, { type, payload: { knowledge, removeIndex } }) => ({
    ...runner,
    knowledge:
      type === ADD_KNOWLEDGE
        ? [...(runner?.knowledge ?? []), knowledge]
        : removeItemFromArray<string>(runner.knowledge, removeIndex),
  }))
  if (!runner) {
    return <CircularProgress />
  } else {
    return runner.attributes?.Logic ? (
      <>
        <h2>Enter Knowledge Skill</h2>
        <form
          ref={skillFormRef}
          className={styles.knowledgeForm}
          onSubmit={(e) => {
            e.preventDefault()
            dispatch({
              type: ADD_KNOWLEDGE,
              payload: { knowledge: skillInputRef.current.value },
            })
          }}
        >
          <AddButton type="submit" aria-label="submit" />
          <Autocomplete<string, false, false, true>
            className={styles.input}
            freeSolo
            options={exampleKnowledgeSkills}
            renderInput={(params) => (
              <TextField
                inputRef={skillInputRef}
                {...params}
                label="input knowledge skill"
              />
            )}
          />
        </form>
        <dl className={styles.points}>
          <dd>Knowledge Points</dd>
          <dt>
            {runner.attributes.Logic.adjustment +
              runner.attributes.Logic.points +
              1 -
              (runner.knowledge?.length ?? 0)}
          </dt>
        </dl>
        {runner.knowledge?.length > 0 && (
          <>
            <h2>{runner.name || "Runner"}&apos;s Knowledge Skills</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Forget</TableCell>
                  <TableCell>Knowledge Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {runner.knowledge?.map((skill, index) => (
                  <TableRow key={skill}>
                    <TableCell>
                      <RemoveButton
                        aria-label={`Remove ${skill}`}
                        onClick={() => {
                          dispatch({
                            type: REMOVE_KNOWLEDGE,
                            payload: { removeIndex: index },
                          })
                        }}
                      />
                    </TableCell>
                    <TableCell>{skill}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </>
    ) : (
      <PriorityWarning requirement="attributes" />
    )
  }
}

export default KnowledgeSkills
