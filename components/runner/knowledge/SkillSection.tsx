import { AddButton, RemoveButton } from "@/components/common"
import { Runner } from "@/types/runner"
import { LanguageSkill } from "@/types/Skill"
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
import { RemainingKnowledgePoints } from "./RemainingKnowledgePoints"

interface SkillSectionProps {
  runner: Runner
  addSkill: (skill: string) => void
  removeSkill: (removeIndex: number) => void
  exampleOptions: string[]
  skillKey: "knowledge" | "language"
}

export const SkillSection: FC<SkillSectionProps> = ({
  runner,
  addSkill,
  removeSkill,
  exampleOptions,
  skillKey,
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
        <AddButton type="submit" aria-label={`submit ${skillKey} skill`} />
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
      <RemainingKnowledgePoints runner={runner} />
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
              {runner[skillKey]?.map(
                (skill: LanguageSkill | string, index: number) => {
                  const name: string =
                    typeof skill === "string" ? skill : skill.name
                  return (
                    <TableRow key={name}>
                      <TableCell>
                        <RemoveButton
                          aria-label={`Remove ${name}`}
                          onClick={() => removeSkill(index)}
                        />
                      </TableCell>
                      <TableCell>{name}</TableCell>
                    </TableRow>
                  )
                },
              )}
            </TableBody>
          </Table>
        </>
      )}
    </section>
  )
}
