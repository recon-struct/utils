/**
 * Slices groups from a given list based on the provided indices.
 * @typeParam A - The type of elements in the list.
 * @param {A[]} list - The list to slice groups from.
 * @param {[number, number][]} indicesList - The list of indices to slice groups
 *        at.
 * @returns The sliced groups.
 * @category Combinator
 */
const getSliceGroups = <A>(list: A[], indicesList: [number, number][]) => {
  if (indicesList.length === 0 || list.length === 0) return [[]]

  const groups: A[][] = []

  for (const indices of indicesList) {
    groups.push(list.slice(...indices))
  }

  return groups
}

export default getSliceGroups
