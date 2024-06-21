import type { AnyArray } from '@recon-struct/utility-types/dist/any/any-array'
import { createTypeGuard } from '../utils'

/**
 * Checks if a value is an array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array, false otherwise.
 * @category Type Guard
 */
const isArray = createTypeGuard<AnyArray>(Array.isArray)

export default isArray
