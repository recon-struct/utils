import type { AnyFunction } from '@recon-struct/utility-types/dist/any/any-function'
import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is a function.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 * @category Type Guard
 */
const isFunction = createTypeofTypeGuard<AnyFunction>('function')

export default isFunction
