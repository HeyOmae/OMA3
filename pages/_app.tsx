import { AppProps } from "next/app"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

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

const oma3Style = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        positionFixed: {
          top: "auto",
          bottom: 0,
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
  },
})

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={oma3Style}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
