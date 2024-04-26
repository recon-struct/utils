import type { AnyFalsy } from '@recon-struct/utility-types/dist/any/any-falsy'
import { createTypeGuard } from './utils'

/**
 * Checks if a value is falsy.
 *
 * @param value - The value to check.
 * @returns `true` if the value is falsy, `false` otherwise.
 * @category Type Guard
 */
const isFalsy = createTypeGuard<AnyFalsy>(value => !value)

export default isFalsy
