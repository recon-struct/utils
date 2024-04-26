import type { AnyFunction } from '@recon-struct/utility-types/dist/any/any-function'
import type { Constructor } from '@recon-struct/utility-types/dist/function'
import { createTypeGuard } from './utils'

/**
 * Checks if a value is a constructor function.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a constructor function, `false` otherwise.
 * @category Type Guard
 */
const isConstructor = createTypeGuard<Constructor>((value: unknown) => {
  try {
    Reflect.construct(String, [], value as AnyFunction | undefined)
  } catch (e) {
    return false
  }
  return true
})

export default isConstructor
