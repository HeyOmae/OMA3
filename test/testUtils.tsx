import React, { FC } from "react"
import { NextRouter } from "next/router"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { initDB } from "react-indexed-db-hook"
import { mockedRunners } from "./mocks"
import { Runner } from "../types/runner"
import { Gear } from "@/types/Resources"
import userEvent from "@testing-library/user-event"

const Providers = ({ children }) => {
  return children
}

const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render, userEvent }

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

export const searchRegexInNodes =
  (regex: RegExp) => (content: string, node: HTMLElement) => {
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

export const caymansCurrentlySpentNuyen = 34_055
const totalNuyen = 275_000
export const caymansNuyen = `${caymansCurrentlySpentNuyen}¥/${totalNuyen}¥`

export const expectToBuyAndSellGear =
  (
    GearPage: FC,
    gearData: Gear[],
    queryParam: { [key: string]: string } = {},
  ) =>
  async () => {
    const { getByLabelText, getAllByLabelText, getByText } = customRender(
        withTestRouter(<GearPage />, {
          query: { id: "10", gearIndex: "0", ...queryParam },
        }),
      ),
      gearA = gearData[0],
      gearB = gearData[Math.floor(gearData.length / 2)],
      gearC = gearData[gearData.length - 1]

    await waitFor(() => {
      expect(getByText(caymansNuyen)).toBeInTheDocument()
    })

    await userEvent.click(getByLabelText(RegExp(`Add .*${gearA.name}$`)))
    await userEvent.click(getByLabelText(RegExp(`Add .*${gearB.name}$`)))

    await waitFor(async () =>
      // When this tests foci, weapon focus needs to get data from indexedDB
      expect(
        getByLabelText(RegExp(`Add .*${gearC.name}$`)),
      ).toBeInTheDocument(),
    )
    await userEvent.click(getByLabelText(RegExp(`Add .*${gearC.name}$`)))

    // eslint-disable-next-line jest/no-standalone-expect
    expect(
      getByText(
        `${
          caymansCurrentlySpentNuyen - gearA.cost - gearB.cost - gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    // This nonsense is here incase there are duplicate gear with the same name
    await userEvent.click(
      getAllByLabelText(RegExp(`Remove .*${gearB.name}$`))[0],
    )

    // eslint-disable-next-line jest/no-standalone-expect
    expect(
      getByText(
        `${
          caymansCurrentlySpentNuyen - gearA.cost - gearC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    // clean up the gear
    await userEvent.click(
      getAllByLabelText(RegExp(`Remove .*${gearA.name}$`))[0],
    )
    await userEvent.click(
      getAllByLabelText(RegExp(`Remove .*${gearC.name}$`))[0],
    )
  }
