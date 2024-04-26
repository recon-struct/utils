import type { Or } from '@recon-struct/utility-types/dist/logic/antecedent/or'

/**
 * Performs a logical OR operation on two boolean values.
 *
 * @param a - The first boolean value.
 * @param b - The second boolean value.
 * @returns The result of the logical OR operation.
 * @category Logic
 */
const or = <A extends boolean, B extends boolean>(a: A, b: B): Or<A, B> =>
  (a || b) as Or<A, B>

export default or
