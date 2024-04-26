import type { BinaryOperator } from '@recon-struct/utility-types/dist/function/binary-operator'

/**
 * Subtracts two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The result of subtracting `b` from `a`.
 * @category Math
 */
const sub: BinaryOperator<number, number> = (a, b) => a - b

export default sub
