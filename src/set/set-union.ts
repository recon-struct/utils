/**
 * Returns the union of two sets.
 *
 * @typeParam A - The type of the first set.
 * @typeParam B - The type of the second set.
 * @param {A} a - The first set.
 * @param {B} b - The second set.
 * @returns The union of the two sets.
 * @category Set
 */
const setUnion = <A, B>(a: Set<A>, b: Set<B>): Set<A | B> =>
  new Set([...a, ...b])

export default setUnion
