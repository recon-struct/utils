import type { AnyPrimitive } from '@recon-struct/utility-types/dist/any/any-primitive'

/**
 * Type utility to validate if a value is defined.
 *
 * @typeParam A - The type to validate.
 * @param {A} value - The value to validate.
 * @returns {boolean} - Returns `true` if the value is defined, `false`
 *          otherwise.
 * @category Type
 */
export type ValidateIsDefined<A extends AnyPrimitive> = A extends undefined
  ? false
  : true

/**
 * Validates if a value is defined.
 *
 * @typeParam A - The type of the value to be validated.
 * @param value - The value to be validated.
 * @returns A boolean indicating if the value is defined.
 * @category Validation
 */
const validateIsDefined = <A extends AnyPrimitive>(
  value: A,
): ValidateIsDefined<A> => (value !== undefined) as ValidateIsDefined<A>

export default validateIsDefined
