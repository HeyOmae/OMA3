// Mock out indexedDB for unit testing
interface Records {
  records: { records: { getAllRecords(): Iterable<any>; size(): number } }
}

type RawObjectStores = { rawObjectStores: Map<string, Records> }

interface IDBFactory {
  _databases: Map<string, RawObjectStores>
}
