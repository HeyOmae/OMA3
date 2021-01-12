import armorData from "@/data/armor"
import ArmorPage from "@/pages/[id]/resources/armor"
import { setupIndexedDB, withTestRouter } from "@/test/testUtils"
import { render, waitFor } from "@testing-library/react"

describe("Armor Page", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<ArmorPage />, { query: { id: "10" } }))
  it("should be able to buy and sell armor", async () => {
    const { getByLabelText, getByText } = setup(),
      currentNuyen = 272230,
      totalNuyen = 275000,
      armorA = armorData[0],
      armorB = armorData[Math.round(armorData.length / 2)],
      armorC = armorData[armorData.length - 1]

    await waitFor(() => {
      expect(getByText(`${currentNuyen}¥/${totalNuyen}¥`)).toBeInTheDocument()
    })

    getByLabelText(`Add ${armorA.name}`).click()
    getByLabelText(`Add ${armorB.name}`).click()
    getByLabelText(`Add ${armorC.name}`).click()

    expect(
      getByText(
        `${
          currentNuyen - armorA.cost - armorB.cost - armorC.cost
        }¥/${totalNuyen}¥`,
      ),
    ).toBeInTheDocument()

    getByLabelText(`Remove ${armorB.name}`).click()

    expect(
      getByText(`${currentNuyen - armorA.cost - armorC.cost}¥/${totalNuyen}¥`),
    ).toBeInTheDocument()
  })
})
