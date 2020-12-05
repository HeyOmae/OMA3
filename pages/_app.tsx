import { AppProps } from "next/app"
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core"

import "./styles.css"

if (typeof window !== "undefined") {
  import("react-indexed-db").then(({ initDB }) => {
    initDB({
      name: "omae",
      version: 1,
      objectStoresMeta: [
        {
          store: "runners",
          storeConfig: { keyPath: "id", autoIncrement: true },
          storeSchema: [
            { name: "name", keypath: "name", options: { unique: true } },
            {
              name: "description",
              keypath: "description",
              options: { unique: false },
            },
          ],
        },
      ],
    })
  })
}

const NEON = "var(--neon)"
const NEON2 = "var(--neon2)"

const oma3Style = createMuiTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: { root: { color: "white" } },
    },
    MuiInputBase: {
      styleOverrides: { root: { color: "white" } },
    },
    MuiAppBar: {
      styleOverrides: {
        positionFixed: {
          top: "auto",
          bottom: 0,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "white",
        },
        stickyHeader: {
          backgroundColor: "black",
          background: "var(--cyberGrad)",
        },
        body: {
          color: NEON,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "none",
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          color: NEON2,
        },
      },
    },
  },
})

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={oma3Style}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
