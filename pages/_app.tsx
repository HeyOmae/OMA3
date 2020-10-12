import { AppProps } from "next/app"
import CssBaseline from "@material-ui/core/CssBaseline"

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

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
)

export default App
