import { useRequiredContext } from "@/components/useRequiredContext"
import { FC } from "react"
import { AddButton, RemoveButton } from "@/components/common/index"
import {
  AddGearButtonProps,
  DispatchContext,
  UPDATE_GEAR,
  RemoveGearButtonProps,
} from "../../../util"
import { IconButton } from "@mui/material"
import Extension from "@mui/icons-material/Extension"
import NextLink from "next/link"
import { Gear } from "@/types/Resources"
import { useRouter } from "next/router"

export const AddResourceButton: FC<AddGearButtonProps> = ({ gear }) => {
  const dispatch = useRequiredContext(DispatchContext, "DispatchContext")
  return (
    <AddButton
      aria-label={`Add ${gear.name}`}
      onClick={() => dispatch({ type: UPDATE_GEAR, payload: gear })}
    />
  )
}

export const RemoveResourceButton: FC<RemoveGearButtonProps> = ({
  gear: { name },
  index,
}) => {
  const dispatch = useRequiredContext(DispatchContext, "DispatchContext")
  return (
    <RemoveButton
      aria-label={`Remove ${name}`}
      onClick={() =>
        dispatch({
          type: UPDATE_GEAR,
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
    <NextLink href={`${asPath}/${index}`} passHref>
      <IconButton aria-label={`Mod ${name} (${index})`} color="secondary">
        <Extension />
      </IconButton>
    </NextLink>
  )
}

export * from "./SettingRating"
export * from "./Selects"
