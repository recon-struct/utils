import type { Arity2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'

/**
 * Calculates the power of a number.
 *
 * @param a - The base number.
 * @param b - The exponent.
 * @returns The result of raising `a` to the power of `b`.
 * @category Math
 */
const pow: Arity2<number, number, number> = (a, b) => a ** b

export default pow
