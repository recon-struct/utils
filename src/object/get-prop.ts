import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'
import type { AnyObject } from '@recon-struct/utility-types/dist/any/any-object'
import isNullish from '../type-guard/is-nullish'

/**
 * Get a property from an object
 *
 * @typeParam A - The type of the object
 * @typeParam B - The type of the key
 * @param ref - The object
 * @param key - The key
 * @example
 * ```
 * getProp({ a: 'b' }, 'a') // 'b'
 * ```
 * @category Object
 */
const getProp = <A, B extends AnyKey>(ref: A, key: B) =>
  isNullish(ref) ? false : (ref as AnyObject)[key]

export default getProp
