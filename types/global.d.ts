import type { JSX as Jsx } from "react/jsx-runtime"

declare global {
  namespace JSX {
    type ElementClass = Jsx.ElementClass
    type Element = Jsx.Element
    type IntrinsicElements = Jsx.IntrinsicElements
  }

  // The File System Access API, which only Chrome and Edge have
  interface FileSystemHandlePermissionDescriptor {
    mode?: "read" | "readwrite"
  }
  interface FileSystemHandle {
    queryPermission(
      descriptor?: FileSystemHandlePermissionDescriptor,
    ): Promise<PermissionState>
    requestPermission(
      descriptor?: FileSystemHandlePermissionDescriptor,
    ): Promise<PermissionState>
  }
  interface OpenFilePickerOptions {
    id?: string
    types?: { description?: string; accept: Record<string, string[]> }[]
  }
  interface Window {
    showOpenFilePicker(
      options?: OpenFilePickerOptions,
    ): Promise<FileSystemFileHandle[]>
  }
}
