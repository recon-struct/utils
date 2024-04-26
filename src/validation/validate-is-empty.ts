import validateIsEqual from './validate-is-equal'

/**
 * Validates if a given value is empty.
 *
 * @param a - The value to be validated.
 * @returns True if the value is empty, false otherwise.
 * @category Validation
 */
const validateIsEmpty = <A extends string>(a: A) => validateIsEqual(a, '')

export default validateIsEmpty
