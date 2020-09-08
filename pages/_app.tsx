import { AppProps } from "next/app"
import CssBaseline from "@material-ui/core/CssBaseline"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
)

export default App
