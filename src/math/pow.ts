import type { BinaryOperator } from '@recon-struct/utility-types/dist/function/binary-operator'

/**
 * Calculates the power of a number.
 *
 * @param a - The base number.
 * @param b - The exponent.
 * @returns The result of raising `a` to the power of `b`.
 * @category Math
 */
const pow: BinaryOperator<number, number> = (a, b) => a ** b

export default pow
