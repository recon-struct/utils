import createTypeGuard from './create-type-guard'

/**
 * Creates a type guard that checks if the type of a value matches a specified type name.
 *
 * @typeParam A - The type of the value to check.
 * @param typeName - The name of the type to check against.
 * @returns A type guard function that checks if the type of a value matches the
 *          specified type name.
 * @category Type Guard
 */
const createTypeofTypeGuard = <A>(typeName: string) =>
  createTypeGuard<A>(value => typeof value === typeName)

export default createTypeofTypeGuard
