/**
 * Computes the intersection of two sets.
 *
 * @param a The first set.
 * @param b The second set.
 * @returns A new set containing the elements that are present in both input
 *          sets.
 * @category Set
 */
const setIntersection = <A, B>(a: Set<A>, b: Set<A | B>) => {
  const newSet = new Set<A | B>()

  for (const elem of a) {
    if (b.has(elem)) {
      newSet.add(elem)
    }
  }

  return newSet
}

export default setIntersection
