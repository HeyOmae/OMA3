import { useEffect, useSyncExternalStore } from "react"

// The rulebook PDFs picked on this computer, so page references can open them.
// Chrome and Edge let us keep a handle to the file in IndexedDB and read it
// again on later visits, without copying the PDF into the browser.

export type RulebookFile = Pick<
  FileSystemFileHandle,
  "getFile" | "queryPermission" | "requestPermission"
>

// the PDF of each book, once it is picked and readable
const files = new Map<string, File>()
// the URL each book's PDF was last opened with
const openUrls = new Map<string, string>()
const listeners = new Set<() => void>()
const restoring = new Set<string>()

export const canOpenLocalFiles = () => "showOpenFilePicker" in window

function requestResult<T>(request: IDBRequest<T>) {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = reject
  })
}

function openFileStore(mode: IDBTransactionMode) {
  return new Promise<IDBObjectStore>((resolve, reject) => {
    const request = indexedDB.open("oma3-rulebooks", 1)
    request.onupgradeneeded = () => request.result.createObjectStore("files")
    request.onsuccess = () =>
      resolve(request.result.transaction("files", mode).objectStore("files"))
    request.onerror = reject
  })
}

async function getBookHandle(book: string): Promise<RulebookFile | undefined> {
  return requestResult((await openFileStore("readonly")).get(book))
}

export async function saveBookHandle(book: string, handle: RulebookFile) {
  await requestResult((await openFileStore("readwrite")).put(handle, book))
}

// returns false when the file can't be read, like when it was moved
async function openBook(book: string, handle: RulebookFile) {
  let file: File
  try {
    file = await handle.getFile()
  } catch {
    return false
  }
  files.set(book, file)
  listeners.forEach((listener) => listener())
  return true
}

// Ask for the PDF. Only works from a click, like asking for permission.
export async function chooseBook(book: string) {
  let handle: RulebookFile
  try {
    ;[handle] = await window.showOpenFilePicker({
      id: "rulebook",
      types: [
        { description: `${book} PDF`, accept: { "application/pdf": [".pdf"] } },
      ],
    })
  } catch {
    // closing the picker without choosing a file throws
    return
  }
  await saveBookHandle(book, handle)
  // picking the file grants permission to read it
  await openBook(book, handle)
}

// Link the PDF from a click on a reference: ask for permission to read the
// file picked on an earlier visit, or ask for the file if there isn't one.
export async function connectBook(book: string) {
  const handle = await getBookHandle(book)
  if (!handle) {
    await chooseBook(book)
  } else if (
    (await handle.requestPermission({ mode: "read" })) === "granted" &&
    !(await openBook(book, handle))
  ) {
    await chooseBook(book)
  }
}

export const rulebookTab = "oma3-rulebook"

// Open the PDF at a page, in the same tab every time. The browser's PDF viewer
// only reads the page from the URL when it loads, and changing just the #page
// of the PDF it shows doesn't move it, so each time gets a new URL.
export function openBookPage(book: string, pdfPage: number) {
  const file = files.get(book)
  if (!file) return
  const oldUrl = openUrls.get(book)
  if (oldUrl) URL.revokeObjectURL(oldUrl)
  const url = URL.createObjectURL(file)
  openUrls.set(book, url)
  window.open(`${url}#page=${pdfPage}`, rulebookTab)
}

// reopen the PDF on a later visit, if the browser still lets us read it
async function restoreBook(book: string) {
  if (files.has(book) || restoring.has(book)) return
  restoring.add(book)
  const handle = await getBookHandle(book)
  if (handle && (await handle.queryPermission({ mode: "read" })) === "granted")
    await openBook(book, handle)
  restoring.delete(book)
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// whether the book's PDF is picked and readable
export function useIsBookLinked(book: string) {
  useEffect(() => {
    if (canOpenLocalFiles()) void restoreBook(book)
  }, [book])
  return useSyncExternalStore(subscribe, () => files.has(book))
}
