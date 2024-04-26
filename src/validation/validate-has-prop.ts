import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'
import type { IsKeyOf } from '@recon-struct/utility-types/dist/object/antecedent/is-key-of'

/**
 * Validate that an object has a property
 *
 * @typeParam A - The type of the object
 * @typeParam B - The type of the key
 * @param ref - The object
 * @param key - The key
 * @example
 * ```
 * validateHasProp({ a: 'b' }, 'a') // true
 * ```
 * @category Validation
 */
const validateHasProp = <A extends object, B extends AnyKey>(
  ref: A,
  key: B,
): IsKeyOf<A, B> => Object.hasOwn(ref, key) as IsKeyOf<A, B>

export default validateHasProp
