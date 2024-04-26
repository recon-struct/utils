/**
 * Returns the complement set of two sets.
 * The complement set contains all elements that are in set `a` but not in set `b`.
 *
 * @typeParam A - The type of the first set.
 * @typeParam B - The type of the second set.
 * @param {A} a - The first set.
 * @param {B} b - The second set.
 * @returns The complement set.
 * @category Set
 */
const setComplement = <A, B>(a: Set<A>, b: Set<A | B>) => {
  const newSet = new Set<A | B>()

  for (const elem of a) {
    if (!b.has(elem)) {
      newSet.add(elem)
    }
  }

  return newSet
}

export default setComplement
