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
  const { push, query } = useRouter()
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
        <NextLink href="/[id]/info" as={`/${query.id}/info`} passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AccountBox />}
          >
            Info
          </Button>
        </NextLink>
        <NextLink href="/[id]/priority" as={`/${query.id}/priority`} passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<TableChart />}
          >
            Priority
          </Button>
        </NextLink>
        <NextLink href="/[id]/metatype" as={`/${query.id}/metatype`} passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AccessibilityNew />}
          >
            Metatype & Attributes
          </Button>
        </NextLink>
        <NextLink href="/[id]/skills" as={`/${query.id}/skills`} passHref>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DirectionsRun />}
          >
            Skills
          </Button>
        </NextLink>
        <NextLink href="/[id]/magres" as={`/${query.id}/magres`} passHref>
          <Button variant="contained" color="primary" startIcon={<FlashOn />}>
            Magic & Resonance
          </Button>
        </NextLink>
        <NextLink href="/[id]/resources" as={`/${query.id}/resources`} passHref>
          <Button variant="contained" color="primary" startIcon={<Payment />}>
            Resources
          </Button>
        </NextLink>
        <NextLink href="/[id]/delete" as={`/${query.id}/delete`} passHref>
          <Button variant="contained" color="primary" startIcon={<Delete />}>
            Delete
          </Button>
        </NextLink>
      </Drawer>
    </>
  )
}
