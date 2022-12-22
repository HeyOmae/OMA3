import { render, waitFor } from "@testing-library/react"
import LifeStyle from "."
import { lifestyles } from "@/data/lifestyle"
import { setupIndexedDB, withTestRouter } from "@/test/testUtils"

describe("<LifeStyle />", () => {
  beforeAll(setupIndexedDB)
  const setup = () =>
    render(withTestRouter(<LifeStyle />, { query: { id: "10" } }))
  it("should have some labels and lifestyles", async () => {
    const { getByText } = setup()

    await waitFor(() => {
      expect(getByText("Buy")).toBeInTheDocument()
    })

    expect(getByText("Name")).toBeInTheDocument()
    expect(getByText("Cost")).toBeInTheDocument()

    lifestyles.forEach(({ name }) =>
      expect(getByText(name)).toBeInTheDocument(),
    )
  })
})
