import type { AnySet } from '@recon-struct/utility-types/dist/any/any-set'
import type { ValueOf } from '@recon-struct/utility-types/dist/object/value-of'

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
const setUnion = <A extends AnySet, B extends AnySet>(
  a: A,
  b: B,
): AnySet<ValueOf<A> | ValueOf<B>> => new Set([...a, ...b])

export default setUnion
