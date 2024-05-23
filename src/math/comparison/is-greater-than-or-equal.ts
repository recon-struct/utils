import type { Arity2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'

/**
 * Checks if the first number is greater than or equal to the second number.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns True if the first number is greater than or equal to the second
 *          number, false otherwise.
 * @category Math
 */
const isGreaterThanOrEqual: Arity2<number, number, boolean> = (a, b) => a >= b

export default isGreaterThanOrEqual
