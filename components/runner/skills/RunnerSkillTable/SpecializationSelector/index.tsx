import { FC } from "react"
import skillData from "@/data/skills.json"
import { DispatchAction } from "@/hooks/useRunnerAccess"
import { ActionPayload, CHANGE_SPECIALIZATION } from "../.."
import { Autocomplete, TextField } from "@material-ui/core"

export interface Props {
  skillName: string
  id: string
  specialization: string
  dispatch: DispatchAction<ActionPayload>
}

export const SpecializationSelector: FC<Props> = ({
  id,
  skillName,
  specialization,
  dispatch,
}) => {
  return (
    <Autocomplete
      freeSolo
      value={specialization ?? ""}
      id={id}
      options={(
        skillData.find(({ name }) => name === skillName)?.specializations ?? []
      ).map(({ name }) => name)}
      onChange={(event, spec) =>
        dispatch({
          type: CHANGE_SPECIALIZATION,
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
            label={`${skillName} specialization`}
            variant="filled"
          />
        )
      }}
    />
  )
}
