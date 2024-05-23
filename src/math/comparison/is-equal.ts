import type { Arity2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'

/**
 * Checks if two values are equal.
 *
 * @param a - The first value.
 * @param b - The second value.
 * @returns True if the values are equal, false otherwise.
 * @category Math
 */
const isEqual: Arity2<any, boolean> = <A, B>(a: A & B, b: B & A) => a === b

export default isEqual
