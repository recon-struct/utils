/**
 * Calculates the difference between two sets.
 * Returns a new set that contains the elements that are in set `a` but not in set `b`.
 * @param a The first set.
 * @param b The second set.
 * @returns A new set containing the difference between `a` and `b`.
 * @category Set
 */
const setSymmetricDifference = <A, B>(a: Set<A>, b: Set<B>) => {
  const ab = new Set<A | B>([...a, ...b])
  const newSet = new Set<A | B>()

  for (const elem of ab) {
    const inA = a.has(elem as A)
    const inB = b.has(elem as B)

    // NOTE: The `+` operator is used to convert the boolean to a number.
    if (+inA ^ +inB) newSet.add(elem)
  }

  return newSet
}

export default setSymmetricDifference
