// Mock out indexedDB for unit testing
interface Records {
  records: { records: any[] }
}

type RawObjectStores = { rawObjectStores: Map<string, Records> }

interface IDBFactory {
  _databases: Map<string, RawObjectStores>
}
