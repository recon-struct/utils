import type { And } from '@recon-struct/utility-types'

/**
 * Performs a logical AND operation on two boolean values.
 * @param a The first boolean value.
 * @param b The second boolean value.
 * @returns The result of the logical AND operation.
 * @category Logic
 */
const and = <A extends boolean, B extends boolean>(a: A, b: B): And<A, B> =>
  a && (b as And<A, B>)

export default and
