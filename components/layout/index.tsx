import { FC, useState, useEffect, PropsWithChildren } from "react"
import {
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Button,
  AppBar,
} from "@mui/material"
import {
  Delete,
  Home,
  Menu,
  TableChart,
  AccountBox,
  AccessibilityNew,
  DirectionsRun,
  FlashOn,
  Payment,
} from "@mui/icons-material"
import { useRouter } from "next/router"
import NextLink from "next/link"
import styles from "./layout.module.css"
import { SELECTED_THEME_KEY, ThemeSelector } from "./themeSelector"

interface Props extends PropsWithChildren {
  className?: string
}

export const Layout: FC<Props> = ({ children, className }) => {
  useEffect(() => {
    document.body.className =
      localStorage.getItem(SELECTED_THEME_KEY) ?? "cyberterminal3"
  }, [])
  return (
    <Container>
      <main className={className}>{children}</main>
    </Container>
  )
}

export const RunnerLayout: FC<PropsWithChildren> = ({ children }) => {
  const {
    push,
    query: { id },
  } = useRouter()
  const [nav, setNav] = useState<number>()

  useEffect(() => {
    switch (nav) {
      case 0:
        push("/")
        break

      default:
        break
    }
  }, [nav, push])
  return (
    <>
      <Layout className={styles["with-app-bar"]}>{children}</Layout>
      <AppBar position="fixed" color="primary">
        <BottomNavigation
          value={nav}
          onChange={(e, selection: number) => setNav(selection)}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Menu" icon={<Menu />} />
        </BottomNavigation>
      </AppBar>
      <Drawer
        className="app-nav"
        anchor="bottom"
        open={nav === 1}
        onClose={() => setNav(undefined)}
      >
        <ThemeSelector />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AccountBox />}
          component={NextLink}
          href={`/${id}/info`}
        >
          Info
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<TableChart />}
          component={NextLink}
          href={`/${id}/priority`}
        >
          Priority
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AccessibilityNew />}
          component={NextLink}
          href={`/${id}/metatype`}
        >
          Metatype & Attributes
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DirectionsRun />}
          component={NextLink}
          href={`/${id}/skills`}
        >
          Skills
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FlashOn />}
          component={NextLink}
          href={`/${id}/magres`}
        >
          Magic & Resonance
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<Payment />}
          component={NextLink}
          href={`/${id}/resources`}
        >
          Resources
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<Delete />}
          component={NextLink}
          href={`/${id}/delete`}
        >
          Delete
        </Button>
      </Drawer>
    </>
  )
}
