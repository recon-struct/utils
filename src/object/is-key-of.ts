import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'
import type { AnyObject } from '@recon-struct/utility-types/dist/any/any-object'
import type { IsKeyOf } from '@recon-struct/utility-types/dist/object/antecedent/is-key-of'

/**
 * Checks if a property is a key of an object.
 *
 * @typeParam A - The type of the object.
 * @typeParam B - The type of the property.
 * @param ref - The object to check.
 * @param prop - The property to check.
 * @returns True if the property is a key of the object, false otherwise.
 * @category Object
 */
const isKeyOf = <A extends AnyObject, B extends AnyKey>(
  ref: A,
  prop: B,
): IsKeyOf<A, B> => ref.hasOwnProperty(prop) as IsKeyOf<A, B>

export default isKeyOf
