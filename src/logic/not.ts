import type { Not } from '@recon-struct/utility-types/dist/logic/antecedent/not'

/**
 * Returns the logical negation of a boolean value.
 *
 * @param a - The boolean value to negate.
 * @returns The negated boolean value.
 * @category Logic
 */
const not = <A extends boolean>(a: A): Not<A> => !a as Not<A>

export default not
