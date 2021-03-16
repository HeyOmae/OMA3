import React, { FC } from "react"
import { NextRouter } from "next/router"
import { RouterContext } from "next/dist/next-server/lib/router-context"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { initDB } from "react-indexed-db"
import { mockedRunners } from "./mocks"
import { Runner } from "../types/runner"
import { Gear } from "@/types/Resources"
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

const customRender = (ui: JSX.Element, options = {}) =>
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
  }: DbSetupConfig = {},
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
    const objectStore = transaction.objectStore(tableName)
    const itemsLeftToAdd = payload.length - 1

    payload.forEach((stuff, index) => {
      objectStore.add(stuff).onsuccess = () => {
        if (itemsLeftToAdd == index) {
          done()
        }
      }
    })
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
  }: Partial<NextRouter> = { query: { id: "1" } },
) => (
  <RouterContext.Provider
    value={{
      isLocaleDomain: true,
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
      isReady: true,
      isPreview: false,
    }}
  >
    {tree}
  </RouterContext.Provider>
)

export class SliderHelper {
  private static height = 10

  // For simplicity pretend that slider's width is 100
  private static width = 100

  private static getBoundingClientRectMock() {
    return {
      bottom: SliderHelper.height,
      height: SliderHelper.height,
      left: 0,
      right: SliderHelper.width,
      top: 0,
      width: SliderHelper.width,
      x: 0,
      y: 0,
    } as DOMRect
  }

  static change(element: HTMLElement, value: number, min = 0, max = 100) {
    const getBoundingClientRect = element.getBoundingClientRect
    element.getBoundingClientRect = SliderHelper.getBoundingClientRectMock
    fireEvent.mouseDown(element, {
      clientX: ((value - min) / (max - min)) * SliderHelper.width,
      clientY: SliderHelper.height,
    })
    element.getBoundingClientRect = getBoundingClientRect
  }
}

export const searchRegexInNodes = (regex: RegExp) => (
  content: string,
  node: HTMLElement,
) => {
  const hasText = (node) => regex.test(node.textContent)
  const nodeHasText = hasText(node)
  const childrenDontHaveText = Array.from(node.children).every(
    (child) => !hasText(child),
  )

  return nodeHasText && childrenDontHaveText
}

export const runnerFromDB = (id = 0): Runner =>
  indexedDB._databases.get("omae").rawObjectStores.get("runners").records
    .records[id].value

export const testBuyAndSellGear = (
  GearPage: FC,
  gearData: Gear[],
) => async () => {
  const { getByLabelText, getByText } = customRender(
      withTestRouter(<GearPage />, { query: { id: "10" } }),
    ),
    currentNuyen = 272230,
    totalNuyen = 275000,
    gearA = gearData[0],
    gearB = gearData[Math.floor(gearData.length / 2)],
    gearC = gearData[gearData.length - 1]

  await waitFor(() => {
    expect(getByText(`${currentNuyen}¥/${totalNuyen}¥`)).toBeInTheDocument()
  })

  getByLabelText(`Add ${gearA.name}`).click()
  getByLabelText(`Add ${gearB.name}`).click()
  getByLabelText(`Add ${gearC.name}`).click()

  expect(
    getByText(
      `${currentNuyen - gearA.cost - gearB.cost - gearC.cost}¥/${totalNuyen}¥`,
    ),
  ).toBeInTheDocument()

  getByLabelText(`Remove ${gearB.name}`).click()

  expect(
    getByText(`${currentNuyen - gearA.cost - gearC.cost}¥/${totalNuyen}¥`),
  ).toBeInTheDocument()
}
