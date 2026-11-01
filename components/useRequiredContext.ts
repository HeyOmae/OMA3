import { Context, useContext } from "react"
import { defined } from "./util"

// For a context that only means something inside its provider, so using it
// anywhere else fails loudly
export const useRequiredContext = <T>(
  context: Context<T | undefined>,
  name: string,
): T => defined(useContext(context), name)
