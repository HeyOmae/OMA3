import { FC } from "react"
import skillData from "@/data/skills.json"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { ActionPayload, CHANGE_SPECIALIZATION } from "../.."
import { Autocomplete, TextField } from "@mui/material"

export interface Props {
  skillName: string
  id: string
  value: string
  dispatch: DispatchAction<ActionPayload>
  type?: symbol
  labelType?: string
  className?: string
}

export const SpecializationSelector: FC<Props> = ({
  id,
  skillName,
  value,
  dispatch,
  type = CHANGE_SPECIALIZATION,
  labelType = "specialization",
  className,
}) => {
  return (
    <Autocomplete<string, false, false, true>
      className={className}
      freeSolo
      value={value ?? ""}
      id={`${id}-${labelType}`}
      options={(
        skillData.find(({ name }) => name === skillName)?.specializations ?? []
      ).map(({ name }) => name)}
      onChange={(event, spec) =>
        dispatch({
          type,
          payload: {
            specializationChange: {
              name: skillName,
              specialization: spec,
            },
          },
        })
      }
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label={`${skillName} ${labelType}`}
            variant="filled"
          />
        )
      }}
    />
  )
}
