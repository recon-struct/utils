import type { AnyPrimitive } from '@recon-struct/utility-types/dist/any/any-primitive'
import isNullish from './is-nullish'
import { createTypeGuard } from './utils'

/**
 * Checks if a value is a primitive type.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a primitive type, `false` otherwise.
 * @category Type Guard
 */
const isPrimitive = createTypeGuard<AnyPrimitive>(value => {
  if (isNullish(value)) {
    return true
  }
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'symbol': {
      return true
    }
    default: {
      return false
    }
  }
})

export default isPrimitive
