import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * Checks if a value is an instance of WeakSet.
 *
 * @param value - The value to check.
 * @returns True if the value is an instance of WeakSet, false otherwise.
 * @category Type Guard
 */
const isWeakSet = createInstanceTypeGuard<WeakSet<any>>(WeakSet)

export default isWeakSet
