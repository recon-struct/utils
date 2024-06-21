import type { Constructor } from '@recon-struct/utility-types/dist/function/constructor'
import createTypeGuard from './create-type-guard'

/**
 * Creates a type guard function that checks if a value is an instance of a
 * given class.
 *
 * @param Class The class constructor to check against.
 * @returns A type guard function that checks if a value is an instance of the
 *          given class.
 * @category Type Guard
 */
const createInstanceTypeGuard = <A>(Class: Constructor) =>
  createTypeGuard<A>(value => value instanceof Class)

export default createInstanceTypeGuard
