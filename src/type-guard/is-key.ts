import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'
import createTypeGuard from './utils/create-type-guard'

/**
 * Checks if a value is a valid key.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a string, number, or symbol; otherwise,
 *          `false`.
 * @category Type Guard
 */
const isKey = createTypeGuard<AnyKey>(value => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'symbol': {
      return true
    }
    default: {
      return false
    }
  }
})

export default isKey
