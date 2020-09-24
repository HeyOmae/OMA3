import { FC, useState, useEffect } from "react"
import Head from "next/head"
import {
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Link,
} from "@material-ui/core"
import { Home, Menu } from "@material-ui/icons"
import { useRouter } from "next/router"
import NextLink from "next/link"

export const Layout: FC = ({ children }) => (
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
    </Head>
    {children}
  </Container>
)

export const RunnerLayout: FC = ({ children }) => {
  const { push } = useRouter()
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
    <Layout>
      {children}
      <BottomNavigation
        value={nav}
        onChange={(e, selection: number) => setNav(selection)}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Menu" icon={<Menu />} />
      </BottomNavigation>
      <Drawer
        anchor="bottom"
        open={nav === 1}
        onClose={() => setNav(undefined)}
      >
        <NextLink href="/[id]/info" as={`/${1}/info`} passHref>
          <Link>Info</Link>
        </NextLink>
        <NextLink href="/[id]/delete" as={`/${1}/delete`} passHref>
          <Link>Delete</Link>
        </NextLink>
      </Drawer>
    </Layout>
  )
}
