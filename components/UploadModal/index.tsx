import { Runner } from "@/types/runner"
import { Upload } from "@mui/icons-material"
import { Alert, Button, Dialog, TextField } from "@mui/material"
import { Url } from "next/dist/shared/lib/router/router"
import { FC, useRef, useState } from "react"
import { CloseButton } from "../common"

interface Props {
  add: (runner: Runner) => Promise<number>
  push: (url: Url, as: Url) => void
}

export const UploadModal: FC<Props> = ({ add, push }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        <Upload /> Upload Runner
      </Button>
      <Modal open={open} push={push} setOpen={setOpen} add={add} />
    </>
  )
}

interface ModalProps extends Props {
  open: boolean
  setOpen: (openState: boolean) => void
}

const Modal: FC<ModalProps> = ({ add, push, open, setOpen }) => {
  const close = () => setOpen(false)
  const [alertMessage, setAlertMessage] = useState("")
  const runnerJsonInput = useRef<HTMLTextAreaElement>(null)
  return (
    <Dialog fullWidth open={open} onClose={close}>
      <h2>Upload Runner</h2>
      <CloseButton onClick={() => setOpen(false)} />
      {alertMessage && <Alert severity="error">{alertMessage}</Alert>}
      <TextField
        label="Copy Runner JSON here"
        multiline
        inputRef={runnerJsonInput}
        onChange={() => setAlertMessage("")}
      />
      <Button
        variant="contained"
        onClick={() => {
          try {
            const { id: discard, ...runner } = JSON.parse(
              runnerJsonInput.current.value,
            )
            add(runner)
              .then((event) => push("/[id]/info", `/${event}/info`))
              .catch((err) => setAlertMessage(err.target.error.toString()))
          } catch (error) {
            setAlertMessage(error.toString())
          }
        }}
      >
        Add Runner
      </Button>
    </Dialog>
  )
}
