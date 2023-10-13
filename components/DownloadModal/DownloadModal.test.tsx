import { render, userEvent, screen } from "@/test/testUtils"
import DownloadModal from "./index"
import { mockedRunners } from "@/test/mocks"

const runner = mockedRunners[9]

function setup() {
  const user = userEvent.setup()
  render(<DownloadModal runner={runner} />)
  return user
}

test("displays a runner's data in json", async () => {
  const user = setup()

  expect(
    screen.queryByRole("textbox", { name: runner.name }),
  ).not.toBeInTheDocument()

  await user.click(
    screen.getByRole("button", { name: `Open Download for ${runner.name}` }),
  )

  expect(screen.getByRole("textbox", { name: runner.name })).toHaveTextContent(
    JSON.stringify(runner),
  )

  await user.keyboard("{Escape}")

  expect(screen.getByRole("dialog")).not.toBeVisible()
})

test("download runner json button", async () => {
  const user = setup()

  await user.click(
    screen.getByRole("button", { name: `Open Download for ${runner.name}` }),
  )

  const downloadLink = screen.getByRole("link", { name: "Download JSON" })
  expect(downloadLink).toHaveAttribute("href", expect.stringMatching(/blob/))
  expect(downloadLink).toHaveAttribute("download", `${runner.name}.json`)
})

test("copy to clipboard", async () => {
  const user = setup()

  await user.click(
    screen.getByRole("button", { name: `Open Download for ${runner.name}` }),
  )

  const copyBtn = screen.getByRole("button", { name: "Copy to Clipboard" })
  await user.click(copyBtn)
  const tipAlert = await screen.findByRole("tooltip", { name: "Copied" })
  expect(tipAlert).toBeVisible()

  // expect(await navigator.clipboard.read()).toEqual(JSON.stringify(runner))
  //TODO: figure out how to text the real text is copied
  expect(await navigator.clipboard.read()).toHaveLength(1)
  await user.unhover(copyBtn)
  // TODO: figure out how to assert that the tooltip closes
  // await waitForElementToBeRemoved(() => tipAlert)
  // expect(tipAlert).not.toBeVisible()
})

test("close button", async () => {
  const user = setup()

  await user.click(
    screen.getByRole("button", { name: `Open Download for ${runner.name}` }),
  )

  const textbox = screen.getByRole("dialog")
  expect(textbox).toBeVisible()

  await user.click(screen.getByRole("button", { name: "Close" }))

  expect(textbox).not.toBeVisible()
})
