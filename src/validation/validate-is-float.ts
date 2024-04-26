import type { IsFloat } from '@recon-struct/utility-types/dist/math/antecedent/is-float'

/**
 * Validates if a value is a float number.
 *
 * @param value - The value to be validated.
 * @returns A boolean indicating if the value is a float number.
 * @category Validation
 */
const validateIsFloat = <A extends number>(value: A): IsFloat<A> => {
  return (value !== (value | 0)) as IsFloat<A>
}

export default validateIsFloat
