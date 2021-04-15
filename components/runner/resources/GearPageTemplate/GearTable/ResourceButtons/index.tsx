import { FC, useContext } from "react"
import { AddButton, RemoveButton } from "@/components/common/index"
import {
  AddGearButtonProps,
  DispatchContext,
  RemoveGearButtonProps,
} from "../../../util"
import { IconButton } from "@material-ui/core"
import { Extension } from "@material-ui/icons"
import NextLink from "next/link"
import { Gear } from "@/types/Resources"
import { useRouter } from "next/router"

export const AddResourceButton: FC<AddGearButtonProps> = ({ gear }) => {
  const dispatch = useContext(DispatchContext)
  return (
    <AddButton
      aria-label={`Add ${gear.name}`}
      onClick={() => dispatch({ type: undefined, payload: gear })}
    />
  )
}

export const RemoveResourceButton: FC<RemoveGearButtonProps> = ({
  gear: { name },
  index,
}) => {
  const dispatch = useContext(DispatchContext)
  return (
    <RemoveButton
      aria-label={`Remove ${name}`}
      onClick={() =>
        dispatch({
          type: undefined,
          payload: index,
        })
      }
    />
  )
}

export const ModLinkButton: FC<{ gear: Gear; index: number }> = ({
  gear: { name },
  index,
}) => {
  const { asPath } = useRouter()
  return (
    <NextLink href={`${asPath}${index}`} passHref>
      <IconButton aria-label={`Mod ${name} (${index})`} color="secondary">
        <Extension />
      </IconButton>
    </NextLink>
  )
}

export * from "./SettingRating"
export * from "./SkillSelect"
