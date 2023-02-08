import { AddButton, RemoveButton } from "@/components/common"
import { Runner } from "@/types/runner"
import {
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { FC, useRef } from "react"
import styles from "./knowledge.module.css"

interface SkillSectionProps {
  runner: Runner
  addSkill: (skill: string) => void
  removeSkill: (removeIndex: number) => void
  exampleOptions: string[]
  skillKey: "knowledge" | "language"
  remainingKnowledgePoints: JSX.Element
}

export const SkillSection: FC<SkillSectionProps> = ({
  runner,
  addSkill,
  removeSkill,
  exampleOptions,
  skillKey,
  remainingKnowledgePoints,
}) => {
  const skillName = skillKey.charAt(0).toUpperCase() + skillKey.slice(1)
  const skillInputRef = useRef<HTMLInputElement>()
  const skillFormRef = useRef<HTMLFormElement>()
  return (
    <section>
      <h2>Enter {skillName} Skill</h2>
      <form
        ref={skillFormRef}
        className={styles.skillForm}
        onSubmit={(e) => {
          e.preventDefault()
          addSkill(skillInputRef.current.value)
        }}
      >
        <AddButton type="submit" aria-label="submit" />
        <Autocomplete<string, false, false, true>
          className={styles.input}
          freeSolo
          options={exampleOptions}
          renderInput={(params) => (
            <TextField
              inputRef={skillInputRef}
              {...params}
              label={`input ${skillKey} skill`}
            />
          )}
        />
      </form>
      {remainingKnowledgePoints}
      {runner[skillKey]?.length > 0 && (
        <>
          <h2>
            {runner.name || "Runner"}&apos;s {skillName} Skills
          </h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Forget</TableCell>
                <TableCell>{skillName} Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {runner[skillKey]?.map((skill: string, index: number) => (
                <TableRow key={skill}>
                  <TableCell>
                    <RemoveButton
                      aria-label={`Remove ${skill}`}
                      onClick={() => removeSkill(index)}
                    />
                  </TableCell>
                  <TableCell>{skill}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </section>
  )
}
