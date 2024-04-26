import type { BinaryOperator } from '@recon-struct/utility-types/dist/function/binary-operator'

/**
 * Checks if the first number is less than the second number.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns True if the first number is less than the second number, false otherwise.
 * @category Math
 */
const isLessThan: BinaryOperator<number, boolean> = (a, b) => a < b

export default isLessThan
