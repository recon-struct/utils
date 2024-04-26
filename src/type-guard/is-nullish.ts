import type { AnyNullish } from '@recon-struct/utility-types/dist/any/any-nullish'
import { createTypeGuard } from './utils'

/**
 * Checks if a value is null or undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 * @category Type Guard
 */
const isNullish = createTypeGuard<AnyNullish>(value => value == null)

export default isNullish
