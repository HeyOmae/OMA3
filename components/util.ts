export function removeItemFromArray<ItemType>(
  items: ItemType[],
  indexToRemove: number,
) {
  return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)]
}
