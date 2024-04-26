import type { BinaryOperator } from '@recon-struct/utility-types'

/**
 * Checks if the first number is greater than or equal to the second number.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns True if the first number is greater than or equal to the second
 *          number, false otherwise.
 * @category Math
 */
const isGreaterThanOrEqual: BinaryOperator<number, boolean> = (a, b) => a >= b

export default isGreaterThanOrEqual
