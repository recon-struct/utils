import type { AnyFunction } from '@recon-struct/utility-types/dist/any/any-function'

/**
 * Creates a type guard function that checks if a value matches a specific type.
 *
 * @typeParam A - The type to check against.
 * @param callback - The callback function that performs the type check.
 * @returns A type guard function that checks if a value is of type A.
 * @category Type Guard
 */
const createTypeGuard = <A>(callback: AnyFunction<[unknown], boolean>) => {
  return (a: unknown): a is A => callback(a)
}

export default createTypeGuard
