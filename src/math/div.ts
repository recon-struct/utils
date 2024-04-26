import type { BinaryOperator } from '@recon-struct/utility-types/dist/function/binary-operator'

/**
 * Divides two numbers.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The quotient of the division.
 * @category Math
 */
const div: BinaryOperator<number, number> = (a, b) => a / b

export default div
