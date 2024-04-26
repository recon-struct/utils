import { createTypeGuard } from '../utils'

/**
 * Checks if a value is null.
 *
 * @param value - The value to check.
 * @returns True if the value is null, false otherwise.
 * @category Type Guard
 */
const isNull = createTypeGuard<null>(val => val === null)

export default isNull
