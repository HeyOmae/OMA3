import {
  render,
  waitFor,
  withTestRouter,
  getByText as getTextInContainer,
  queryByText as queryTextInContainer,
  getByTestId as getTestIdInContainer,
} from "@/test/testUtils"
import { GearTyped } from "@/types/Resources"
import { FC } from "react"

export const TestGeneralGearWithRating =
  (GearComponent: FC, listOfGear: GearTyped[]) => async () => {
    const { getByText, getByLabelText } = render(
      withTestRouter(<GearComponent />, { query: { id: "10" } }),
    )

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Rating")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    //stats
    const gear = listOfGear.find(({ rating }) => rating),
      gearRow = getByLabelText(`Add ${gear.name}`).closest("tr")

    expect(getTextInContainer(gearRow, gear.name)).toBeInTheDocument()
    expect(
      getTestIdInContainer(gearRow, `${gear.name}-rating`),
    ).toBeInTheDocument()
    expect(getTextInContainer(gearRow, gear.availability)).toBeInTheDocument()
    expect(getTextInContainer(gearRow, `${gear.cost}¥`)).toBeInTheDocument()
  }

export const TestGeneralGearWithoutRating =
  (GearComponent: FC, listOfGear: GearTyped[]) => async () => {
    const { getByText, getByLabelText } = render(
      withTestRouter(<GearComponent />, { query: { id: "10" } }),
    )

    await waitFor(() => expect(getByText("Buy")).toBeInTheDocument())

    const buyHeader = getByText("Buy").closest("tr")

    expect(getTextInContainer(buyHeader, "Name")).toBeInTheDocument()
    expect(queryTextInContainer(buyHeader, "Rating")).not.toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Avail")).toBeInTheDocument()
    expect(getTextInContainer(buyHeader, "Cost")).toBeInTheDocument()

    //stats
    listOfGear.forEach((gear) => {
      const gearRow = getByLabelText(`Add ${gear.name}`).closest("tr")

      expect(getTextInContainer(gearRow, gear.name)).toBeInTheDocument()
      expect(getTextInContainer(gearRow, gear.availability)).toBeInTheDocument()
      expect(getTextInContainer(gearRow, `${gear.cost}¥`)).toBeInTheDocument()
    })
  }
