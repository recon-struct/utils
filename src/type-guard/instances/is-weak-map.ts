import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * Type guard that checks if a value is an instance of WeakMap.
 *
 * @param value - The value to check.
 * @returns True if the value is an instance of WeakMap, false otherwise.
 * @category Type Guard
 */
const isWeakMap = createInstanceTypeGuard<WeakMap<any, any>>(WeakMap)

export default isWeakMap
