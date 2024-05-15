
import type { AnyPrimitive } from '@recon-struct/utility-types/dist/any/any-primitive'
import type { IsEqual } from '@recon-struct/utility-types/dist/extension/antecedent/is-equal'

/**
 * Validates if two values are equal.
 *
 * @typeParam A - The type of the first value.
 * @typeParam B - The type of the second value.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are equal, false otherwise.
 * @category Validation
 */
const validateIsEqual = <A extends AnyPrimitive, B extends AnyPrimitive>(
  a: A,
  b: B,
): IsEqual<A, B> => ((a as any) === (b as any)) as IsEqual<A, B>

export default validateIsEqual
