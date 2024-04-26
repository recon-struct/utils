import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * Checks if a value is an instance of Map.
 *
 * @param value - The value to be checked.
 * @returns True if the value is an instance of Map, false otherwise.
 * @category Type Guard
 */
const isMap = createInstanceTypeGuard<Map<any, any>>(Map)

export default isMap
