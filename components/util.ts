export function removeItemFromArray<ItemType>(
  items: ItemType[],
  indexToRemove: number,
) {
  return items.toSpliced(indexToRemove, 1)
}

export function capitalization(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

// For a value that has to be there by now, like the runner once it's loaded.
// Fails loudly instead of letting undefined spread through the app.
export function defined<T>(value: T | null | undefined, what: string): T {
  if (value === undefined || value === null) {
    throw new Error(`Missing ${what}`)
  }
  return value
}

// For a key that comes from outside the code, like the URL
export function keyOf<T extends object>(
  key: string,
  object: T,
): Extract<keyof T, string> {
  const keys = Object.keys(object)
  // Object.keys only lists the object's own keys, so a match is one of them
  const isOwnKey = (ownKey: string): ownKey is Extract<keyof T, string> =>
    ownKey === key
  const found = keys.find(isOwnKey)
  if (found === undefined) {
    throw new Error(`No ${key} in ${keys.join(", ")}`)
  }
  return found
}
