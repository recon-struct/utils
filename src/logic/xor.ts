import type { Xor } from '@recon-struct/utility-types/dist/logic/antecedent/xor'

/**
 * Performs an exclusive OR (XOR) operation on two boolean values.
 *
 * @param a - The first boolean value.
 * @param b - The second boolean value.
 * @returns The result of the XOR operation.
 * @category Logic
 */
const xor = <A extends boolean, B extends boolean>(a: A, b: B): Xor<A, B> =>
  (a ? !b : b) as Xor<A, B>

export default xor
