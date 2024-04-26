import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is a boolean.
 *
 * @param value - The value to check.
 * @returns True if the value is a boolean, false otherwise.
 * @category Type Guard
 */
const isBoolean = createTypeofTypeGuard<boolean>('boolean')

export default isBoolean
