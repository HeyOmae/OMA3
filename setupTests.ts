import "@testing-library/jest-dom"
import "fake-indexeddb/auto"

// jsdom does not implement PointerEvent, which MUI's Slider listens for
if (!window.PointerEvent) {
  class PointerEvent extends MouseEvent {
    pointerId: number
    pointerType: string

    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params)
      this.pointerId = params.pointerId ?? 0
      this.pointerType = params.pointerType ?? "mouse"
    }
  }
  window.PointerEvent = PointerEvent as typeof window.PointerEvent
}
