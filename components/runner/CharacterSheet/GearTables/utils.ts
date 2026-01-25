export const formatModWithRating = (mod: {
  name: string
  currentRating?: number
}) => {
  return mod.currentRating ? `${mod.name} ${mod.currentRating}` : mod.name
}
