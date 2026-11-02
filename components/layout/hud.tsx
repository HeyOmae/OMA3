import { Button, Snackbar } from "@mui/material"
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react"
import { createPortal } from "react-dom"

// where the points trackers render, in the bar fixed to the bottom of the screen
const HudSlotContext = createContext<HTMLElement | null>(null)

// outside a runner layout there is no bar, so the points render where they are
export const PointsHud: FC<PropsWithChildren> = ({ children }) => {
  const slot = useContext(HudSlotContext)
  return slot ?
      createPortal(<div className="points-hud-group">{children}</div>, slot)
    : <>{children}</>
}

export interface Notice {
  message: string
  // id of the element that holds what was added
  target: string
}

const NotifyContext = createContext<(notice: Notice) => void>(() => {})

// tell the user something was added, with a way to jump to it
export const useNotify = () => useContext(NotifyContext)

interface ProviderProps extends PropsWithChildren {
  slot: HTMLElement | null
}

export const HudProvider: FC<ProviderProps> = ({ slot, children }) => {
  const [notice, setNotice] = useState({ message: "", target: "", key: 0 })
  const [open, setOpen] = useState(false)
  const notify = useCallback((next: Notice) => {
    setNotice({ ...next, key: Date.now() })
    setOpen(true)
  }, [])

  return (
    <HudSlotContext.Provider value={slot}>
      <NotifyContext.Provider value={notify}>
        {children}
        <Snackbar
          key={notice.key}
          className="notice"
          open={open}
          autoHideDuration={3000}
          onClose={(event, reason) => {
            // buying several things in a row shouldn't hide each notice
            if (reason !== "clickaway") setOpen(false)
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          message={notice.message}
          action={
            <Button
              color="secondary"
              size="small"
              onClick={() => {
                document
                  .getElementById(notice.target)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
                setOpen(false)
              }}
            >
              Show
            </Button>
          }
        />
      </NotifyContext.Provider>
    </HudSlotContext.Provider>
  )
}
