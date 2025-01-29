import JSDOMEnvironment from "jest-environment-jsdom"

// https://github.com/facebook/jest/blob/v29.4.3/website/versioned_docs/version-29.4/Configuration.md#testenvironment-string
export default class FixJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
    super(...args)

    // FIXME https://github.com/jsdom/jsdom/issues/1721
    this.global.URL = URL
    this.global.Blob = Blob
    // Add native fetch to JSDOM
    this.global.fetch = fetch
    this.global.Request = Request
    this.global.Response = Response
    // for fakeindexeddb
    this.global.structuredClone = structuredClone
    //for mws
    this.global.TextEncoder = TextEncoder
    this.global.BroadcastChannel = BroadcastChannel
    this.global.TransformStream = TransformStream
  }
}
