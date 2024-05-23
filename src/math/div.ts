import type { Arity2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'

/**
 * Divides two numbers.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The quotient of the division.
 * @category Math
 */
const div: Arity2<number, number, number> = (a, b) => a / b

export default div
