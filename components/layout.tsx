import { FC, useState, useEffect } from "react"
import Head from "next/head"
import {
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Button,
  AppBar,
} from "@material-ui/core"
import {
  Delete,
  Home,
  Menu,
  TableChart,
  AccountBox,
  AccessibilityNew,
  DirectionsRun,
  FlashOn,
} from "@material-ui/icons"
import { useRouter } from "next/router"
import NextLink from "next/link"
import styles from "./layout.module.css"

interface Props {
  className?: string
}

export const Layout: FC<Props> = ({ children, className }) => (
  <Container>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>OMA3</title>

      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#317EFB" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Audiowide"
      />
    </Head>
    <main className={className}>{children}</main>
  </Container>
)

export const RunnerLayout: FC = ({ children }) => {
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
  }, [nav])
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
        anchor="bottom"
        open={nav === 1}
        onClose={() => setNav(undefined)}
      >
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
        <NextLink href="/[id]/delete" as={`/${query.id}/delete`} passHref>
          <Button variant="contained" color="primary" startIcon={<Delete />}>
            Delete
          </Button>
        </NextLink>
      </Drawer>
    </>
  )
}
