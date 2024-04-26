import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'
import type { AnyObject } from '@recon-struct/utility-types/dist/any/any-object'
import type { Override } from '@recon-struct/utility-types/dist/object/override'

/**
 * Set a property on an object
 *
 * @typeParam A - The type of the object
 * @typeParam B - The type of the key
 * @param ref - The object
 * @param key - The key
 * @example
 * ```
 * setProp({ a: 'b' }, 'a', 'c') // { a: 'c' }
 * ```
 * @category Object
 */
const setProp = <A extends AnyObject, B extends AnyKey, C>(
  ref: A,
  key: B,
  value: C,
): Override<A, { [D in B]: C }> => {
  ref[key] = value as A[B]

  return ref
}

export default setProp
