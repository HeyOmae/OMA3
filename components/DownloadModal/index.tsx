import { Runner } from "@/types/runner"
import { Dialog, IconButton, TextField, Tooltip } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import { FC, useMemo, useState } from "react"
import { ContentCopy } from "@mui/icons-material"
import styles from "./DownloadModal.module.css"
import { CloseButton } from "../common"

interface Props {
  runner: Runner
}

const DownloadModal: FC<Props> = ({ runner }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <IconButton
        aria-label={`Open Download for ${runner.name}`}
        onClick={() => setOpen(true)}
      >
        <DownloadIcon />
      </IconButton>
      <Modal runner={runner} open={open} setOpen={setOpen} />
    </div>
  )
}

interface ModalProps extends Props {
  open: boolean
  setOpen: (openState: boolean) => void
}

const Modal: FC<ModalProps> = ({ runner, open, setOpen }) => {
  const [openTip, setOpenTip] = useState(false)
  const runnerJSONed = useMemo(() => JSON.stringify(runner), [runner])
  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
      <h2>Download Runner</h2>
      <CloseButton onClick={() => setOpen(false)} />
      <Tooltip title="Copied" open={openTip}>
        <label onPointerOut={() => setOpenTip(false)}>
          <IconButton
            aria-labelledby="copy-button-label"
            onClick={() =>
              navigator.clipboard
                .writeText(runnerJSONed)
                .then(() => setOpenTip(true))
            }
          >
            <ContentCopy />
          </IconButton>
          <span id="copy-button-label">Copy to Clipboard</span>
        </label>
      </Tooltip>
      <DownloadButton json={runnerJSONed} name={runner.name} />
      <hr />
      <TextField
        label={runner.name}
        multiline
        value={runnerJSONed}
        inputProps={{ readOnly: true }}
      />
    </Dialog>
  )
}

const DownloadButton: FC<{ json: string; name: string }> = ({ json, name }) => {
  const jsonURL = useMemo(
    () => URL.createObjectURL(new Blob([json], { type: "application/json" })),
    [json],
  )

  return (
    <label>
      <IconButton
        className={styles["download-json"]}
        href={jsonURL}
        download={`${name}.json`}
      >
        <DownloadIcon />
        Download JSON
      </IconButton>
    </label>
  )
}

export default DownloadModal
