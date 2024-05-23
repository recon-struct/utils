import type { Arity2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'

/**
 * Multiplies two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The product of the two numbers.
 * @category Math
 */
const mul: Arity2<number, number, number> = (a, b) => a * b

export default mul
