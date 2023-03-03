import { AddButton, RemoveButton } from "@/components/common"
import { Runner } from "@/types/runner"
import { LanguageRating, LanguageSkill } from "@/types/Skill"
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
  changeRating?: (
    skill: LanguageSkill,
    rating: LanguageRating,
    index: number,
  ) => void
}

export const SkillSection: FC<SkillSectionProps> = ({
  runner,
  addSkill,
  removeSkill,
  exampleOptions,
  skillKey,
  changeRating,
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
                {skillKey === "language" && <TableCell>Rating</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {runner[skillKey]?.map(
                (skill: LanguageSkill | string, index: number) => {
                  const isLanguage = typeof skill === "object"
                  const name: string = isLanguage ? skill.name : skill
                  return (
                    <TableRow key={name}>
                      <TableCell>
                        <RemoveButton
                          aria-label={`Remove ${name}`}
                          onClick={() => removeSkill(index)}
                        />
                      </TableCell>
                      <TableCell>{name}</TableCell>
                      {isLanguage && (
                        <TableCell>
                          <FormControl>
                            <InputLabel id={`${name}-rating-label`}>
                              {name} Rating
                            </InputLabel>
                            <Select
                              labelId={`${name}-rating-label`}
                              label={`${name} Rating`}
                              value={skill.rating}
                              onChange={({ target }) =>
                                changeRating(
                                  skill,
                                  (target.value === "Native"
                                    ? target.value
                                    : +target.value) as LanguageRating,
                                  index,
                                )
                              }
                            >
                              <MenuItem value="Native">Native</MenuItem>
                              <MenuItem value="1">1</MenuItem>
                              <MenuItem value="2">2</MenuItem>
                              <MenuItem value="3">3</MenuItem>
                              <MenuItem value="4">4</MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                      )}
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
