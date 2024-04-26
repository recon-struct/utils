import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * Checks if a value is an instance of Set.
 *
 * @param value - The value to check.
 * @returns True if the value is an instance of Set, false otherwise.
 * @category Type Guard
 */
const isSet = createInstanceTypeGuard<Set<any>>(Set)

export default isSet
