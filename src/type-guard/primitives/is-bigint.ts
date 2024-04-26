import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is of type bigint.
 *
 * @param value - The value to be checked.
 * @returns True if the value is of type bigint, false otherwise.
 * @category Type Guard
 */
const isBigint = createTypeofTypeGuard<bigint>('bigint')

export default isBigint
