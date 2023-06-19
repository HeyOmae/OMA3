export function removeItemFromArray<ItemType>(
  items: ItemType[],
  indexToRemove: number,
) {
  return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)]
}

export function capitalization(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
