import React from "react"
import { NextRouter } from "next/router"
import { RouterContext } from "next/dist/next-server/lib/router-context"
import { render } from "@testing-library/react"
import { initDB } from "react-indexed-db"
import { mockedRunners } from "./mocks"
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }

export interface DbSetupConfig {
  payload?: any[]
  dbName?: string
  tableName?: string
}

export const setupIndexedDB = (
  done: jest.DoneCallback,
  {
    dbName = "omae",
    tableName = "runners",
    payload = mockedRunners,
  }: DbSetupConfig = {}
) => {
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
  const request = indexedDB.open(dbName, 1)
  request.onsuccess = () => {
    const db = request.result
    const transaction = db.transaction([tableName], "readwrite")
    // transaction.oncomplete = done
    // const objectStore = db.createObjectStore(tableName, { keyPath: "id" })

    // transaction.oncomplete = () => {
    const objectStore = transaction.objectStore(tableName)
    const itemsLeftToAdd = payload.length - 1

    payload.forEach((stuff, index) => {
      objectStore.add(stuff).onsuccess = () => {
        if (itemsLeftToAdd == index) {
          done()
        }
      }
    })
    // }
  }
}

export const withTestRouter = (
  tree: React.ReactElement,
  {
    route = "",
    pathname = "",
    query = {},
    asPath = "",
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  }: Partial<NextRouter> = {}
) => {
  // const router = createRouter("", { id: "1701" }, "", {
  //   subscription: jest.fn(),
  //   wrapApp: jest.fn(),
  //   isFallback: false,
  //   initialProps: {},
  //   pageLoader: {},
  //   Component: jest.fn(),
  //   initialStyleSheets: [],
  //   App: jest.fn(),
  // })
  return (
    <RouterContext.Provider
      value={{
        basePath: "",
        route,
        pathname,
        query,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        events,
      }}
    >
      {tree}
    </RouterContext.Provider>
  )
}
