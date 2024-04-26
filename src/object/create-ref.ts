import type { AnyNullish } from '@recon-struct/utility-types/dist/any/any-nullish'
import isNullish from '../type-guard/is-nullish'

/**
 * Represents a function that returns an empty object.
 * @category Type
 */
export interface Ref {
  (): {}
  <A>(a: A): A extends AnyNullish ? {} : A
}

/**
 * Return `a` if it can be used as a reference otherwise return `{}`
 *
 * @param a - The value to check
 * @returns something which can be used as a reference
 * @category Object
 */
const ref: Ref = (a?: unknown) => (isNullish(a) ? Object.create(null) : a)

export default ref
