import type { AnyObject } from '@recon-struct/utility-types'
import { isNull } from '../primitives'
import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is an object.
 *
 * @param value - The value to check.
 * @returns True if the value is an object, false otherwise.
 * @category Type Guard
 */
const isObject = (val: any): val is AnyObject => {
  if (isNull(val)) return false

  return createTypeofTypeGuard<AnyObject>('object')(val)
}

export default isObject
