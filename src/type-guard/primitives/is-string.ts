import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is a string.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a string, `false` otherwise.
 * @category Type Guard
 */
const isString = createTypeofTypeGuard<string>('string')

export default isString
