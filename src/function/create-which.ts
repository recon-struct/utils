import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'

/**
 * Represents a type that selects a property from an object, with fallback
 * options.
 * If the property exists in the object, its value is returned.
 * If the property does not exist, the fallback options are checked in order,
 * and the value of the first existing property is returned.
 * If none of the fallback options exist, undefined is returned.
 *
 * @typeParam A - The type of the object.
 * @typeParam B - The type of the first fallback option.
 * @typeParam C - The type of the second fallback option.
 * @category Type
 */
export type WithFallback<A, B, C = undefined> = B extends keyof A
  ? A[B]
  : C extends keyof A
    ? A[C]
    : undefined

/**
 * Represents a function that takes an argument `a` and returns a function that
 * takes an optional argument `b`.
 * The returned function has a fallback type `WithFallback<A, B>`.
 * @category Type
 */
export interface Which {
  <A>(a: A): <B extends AnyKey>(b?: B) => WithFallback<A, B>
  <A, B extends keyof A>(
    a: A,
    b?: B,
  ): <C extends AnyKey>(c?: C) => WithFallback<A, C, B>
}

/**
 * Creates a function that returns a value from a reference object based on a
 * given key.
 * If the key is provided, the function returns the value associated with that
 * key in the reference object.
 * If the key is not provided, but a default key is specified, the function
 * returns the value associated with the default key.
 * If neither the key nor the default key is provided, the function returns
 * undefined.
 *
 * @param ref - The reference object.
 * @param defaultKey - The default key to use if no key is provided.
 * @returns A function that returns a value from the reference object based on the provided key or default key.
 * @example
 * ```
 * // Without default
 * const which1 = createWhich({
 *   a: 1,
 *   b: 2,
 * })
 * which1('a') // 'a'
 * which1('zzz') // undefined
 * ```
 * @example
 * ```
 * // With default
 * const which2 = createWhich({
 *   a: 1,
 *   b: 2,
 * }, 'b')
 * const ex3 = which2('a') // 1
 * const ex4 = which2('zzz') // 2
 * ```
 * @category Function
 */
const createWhich: Which =
  (ref: any, defaultKey?: AnyKey) => (key?: AnyKey) => {
    if (key !== undefined) {
      return ref[key]
    } else if (defaultKey !== undefined) {
      return ref[defaultKey]
    } else {
      return
    }
  }

export default createWhich
