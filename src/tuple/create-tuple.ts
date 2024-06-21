import type { Tuple } from '@recon-struct/utility-types/dist/tuple/tuple'

/**
 * Creates a tuple with a specified number of items, all initialized to the same value.
 *
 * @typeParam A - The numeric type representing the number of items in the tuple.
 * @typeParam B - The type of the items in the tuple.
 * @param {A} n - The number of items in the tuple.
 * @param {B} item - The value to initialize each item in the tuple.
 * @returns - The tuple with `n` items, all initialized to `item`.
 */
const createTuple = <A extends number, B extends any>(n: A, item: B) =>
  Array(n).fill(item) as Tuple<A, B>

export default createTuple
