import { render, withTestRouter, setupIndexedDB, screen } from "../testUtils"
import { DeletePage } from "@/pages/[id]/delete"

describe("delete page", () => {
  beforeAll(setupIndexedDB)
  const setup = () => {
    return render(withTestRouter(<DeletePage />))
  }

  it("should have a warning message and delete button", async () => {
    setup()

    expect(
      screen.getByText("Do you want to delete your runner?"),
    ).toBeInTheDocument()

    expect(await screen.findByText("Retire Runner")).toBeInTheDocument()
  })
})
