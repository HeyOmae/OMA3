import { render, screen, userEvent } from "@/test/testUtils"
import { UploadModal } from "."
import { mockedRunners } from "@/test/mocks"
import * as runnerSchema from "@/hooks/runnerSchema"
import { CURRENT_SCHEMA_VERSION } from "@/hooks/runnerSchema"

const setup = () => {
  const user = userEvent.setup()
  const addMock = jest.fn(),
    pushMock = jest.fn()
  render(<UploadModal add={addMock} push={pushMock} />)
  return { user, addMock, pushMock }
}

test("add runner", async () => {
  const { user, addMock, pushMock } = setup()
  addMock.mockImplementation(() => Promise.resolve(123))

  const { id, ...aRunner } = { ...mockedRunners[0], name: "Link" }

  await user.click(screen.getByRole("button", { name: "Upload Runner" }))
  await user.click(
    screen.getByRole("textbox", { name: "Copy Runner JSON here" }),
  )
  await user.keyboard(
    JSON.stringify(aRunner).replace(/[{]/g, (match) => match + match),
  )
  await user.click(screen.getByRole("button", { name: "Add Runner" }))

  // a runner exported before versioning gets migrated on the way in
  expect(addMock).toHaveBeenCalledWith({
    ...aRunner,
    schemaVersion: CURRENT_SCHEMA_VERSION,
  })
  expect(pushMock).toHaveBeenCalledWith("/[id]/info", "/123/info")
})

test("invalid json", async () => {
  const { user } = setup()

  await user.click(screen.getByRole("button", { name: "Upload Runner" }))
  await user.click(
    screen.getByRole("textbox", { name: "Copy Runner JSON here" }),
  )
  await user.keyboard("This is a Shadowrunner.")
  await user.click(screen.getByRole("button", { name: "Add Runner" }))

  const alert = screen.getByRole("alert")
  expect(alert).toHaveTextContent(
    "SyntaxError: Unexpected token 'T', \"This is a \"... is not valid JSON",
  )

  await user.click(
    screen.getByRole("textbox", { name: "Copy Runner JSON here" }),
  )
  await user.keyboard("{{}")
  expect(alert).not.toBeInTheDocument()
})

test("close", async () => {
  const { user } = setup()

  expect(
    screen.queryByRole("textbox", { name: "Copy Runner JSON here" }),
  ).not.toBeInTheDocument()

  await user.click(screen.getByRole("button", { name: "Upload Runner" }))

  const modalInput = screen.getByRole("textbox", {
    name: "Copy Runner JSON here",
  })

  expect(modalInput).toBeInTheDocument()

  await user.keyboard("{Escape}")

  expect(modalInput).not.toBeVisible()

  await user.click(await screen.findByRole("button", { name: "Upload Runner" }))

  expect(
    screen.getByRole("textbox", {
      name: "Copy Runner JSON here",
    }),
  ).toBeVisible()

  await user.click(screen.getByRole("button", { name: "Close" }))

  expect(modalInput).not.toBeVisible()
})

test("migrates a runner exported from an older version", async () => {
  const { id, ...aRunner } = { ...mockedRunners[0], name: "Link" }
  jest
    .spyOn(runnerSchema, "migrateIfOutdated")
    .mockResolvedValue({ ...aRunner, schemaVersion: 99 })
  const { user, addMock } = setup()
  addMock.mockImplementation(() => Promise.resolve(123))

  await user.click(screen.getByRole("button", { name: "Upload Runner" }))
  await user.click(
    screen.getByRole("textbox", { name: "Copy Runner JSON here" }),
  )
  await user.keyboard(
    JSON.stringify(aRunner).replace(/[{]/g, (match) => match + match),
  )
  await user.click(screen.getByRole("button", { name: "Add Runner" }))

  expect(addMock).toHaveBeenCalledWith({ ...aRunner, schemaVersion: 99 })

  jest.restoreAllMocks()
})
