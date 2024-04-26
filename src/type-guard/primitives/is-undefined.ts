import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is undefined, false otherwise.
 * @category Type Guard
 */
const isUndefined = createTypeofTypeGuard<undefined>('undefined')

export default isUndefined
