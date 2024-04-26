import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is a number.
 *
 * @param value - The value to check.
 * @returns True if the value is a number, false otherwise.
 * @category Type Guard
 */
const isNumber = createTypeofTypeGuard<number>('number')

export default isNumber
