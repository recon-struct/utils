/**
 * This file contains type definitions for the 'set' module.
 */
/**
 * Type alias that checks if a given type is a subclass of Set.
 * @typeParam A - The type to check.
 * @returns A if A is a subclass of Set, otherwise never.
 * @category Type
 */
export type SetSubclass<A> = A extends Set<any> ? A : never
