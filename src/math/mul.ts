import type { BinaryOperator } from '@recon-struct/utility-types/dist/function/binary-operator'

/**
 * Multiplies two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The product of the two numbers.
 * @category Math
 */
const mul: BinaryOperator<number, number> = (a, b) => a * b

export default mul
