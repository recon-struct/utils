import type { Arity2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'

/**
 * Subtracts two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The result of subtracting `b` from `a`.
 * @category Math
 */
const sub: Arity2<number, number, number> = (a, b) => a - b

export default sub
