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

const oma3Style = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: { color: "white" },
    },
    MuiInputBase: {
      root: { color: "white" },
    },
    MuiAppBar: {
      positionFixed: {
        top: "auto",
        bottom: 0,
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
