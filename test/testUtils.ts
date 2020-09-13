import { render } from "@testing-library/react"
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
  payload: any[]
  dbName?: string
  tableName?: string
}

export const setupIndexedDB = (
  done: jest.DoneCallback,
  { dbName = "omae", tableName = "runners", payload }: DbSetupConfig
) => {
  const request = indexedDB.open(dbName, 1)
  // console.log("request DB!!!!!!!!!! ->", request)
  request.onsuccess = () => {
    const db = request.result
    const transaction = db.transaction([tableName], "readwrite")
    // transaction.oncomplete = done
    // const objectStore = db.createObjectStore(tableName, { keyPath: "id" })

    // transaction.oncomplete = () => {
    const objectStore = transaction.objectStore(tableName)
    const itemsLeftToAdd = payload.length - 1

    payload.forEach((stuff, index) => {
      objectStore.add(stuff).onsuccess = (x) => {
        if (itemsLeftToAdd == index) {
          done()
        }
      }
    })
    // }
  }
}
