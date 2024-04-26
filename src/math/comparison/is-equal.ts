import type { BinaryOperator } from '@recon-struct/utility-types'

/**
 * Checks if two values are equal.
 *
 * @param a - The first value.
 * @param b - The second value.
 * @returns True if the values are equal, false otherwise.
 * @category Math
 */
const isEqual: BinaryOperator<any, boolean> = <A, B>(a: A & B, b: B & A) =>
  a === b

export default isEqual
