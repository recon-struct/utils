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
 * const ex1 = getProp({ a: 'b' }, 'a') // 'b'
 * const ex2 = getProp(null, 'a') // undefined
 * ```
 * @category Object
 */
const getProp = <A, B extends AnyKey>(ref: A, key: B) =>
  (isNullish(ref)
    ? undefined
    : (ref as A extends AnyObject ? A : never)[key]) as A extends AnyObject
    ? A[B]
    : undefined

export default getProp
