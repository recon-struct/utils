import type { AnyArray } from '@recon-struct/utility-types/dist/any/any-array'
import type { AnyFunction } from '@recon-struct/utility-types/dist/any/any-function'
import type { AnyKey } from '@recon-struct/utility-types/dist/any/any-key'
import type { AnyObject } from '@recon-struct/utility-types/dist/any/any-object'
import type { KeyOf } from '@recon-struct/utility-types/dist/object/key-of'

/**
 * The name of the property used to discriminate the type of a token.
 * @category Constant
 */
export const DISCRIMINANT_PROPERTY = 'type'

/**
 * Represents a token with generic type parameters.
 * @typeParam A - The type of keys in the token.
 * @typeParam B - The type of values in the token.
 * @typeParam C - The additional properties in the token.
 * @category Type
 */
export type Token<
  A extends AnyKey = AnyKey,
  B extends AnyKey = AnyKey,
  C extends AnyObject = AnyObject,
> =
  | {
      [D in A]: B
    }
  | {
      [D in keyof C]: C[D]
    }

/**
 * Defines a type for factories that create tokens.
 * @typeParam A - The type of the token key.
 * @typeParam B - The type of the object containing factory functions.
 * @category Type
 */
export type Factories<
  A extends AnyKey,
  B extends AnyObject<AnyKey, AnyFunction<AnyArray, AnyObject>>,
> = {
  [C in KeyOf<B>]: (..._: Parameters<B[C]>) => Token<A, C, ReturnType<B[C]>>
}

/**
 * Represents a factory function that creates factories.
 * @typeParam A - The type of the first argument.
 * @typeParam B - The type of the second argument, defaults to typeof DISCRIMINANT_PROPERTY.
 * @param a - The first argument.
 * @param b - The second argument, optional.
 * @returns A Factories object.
 * @category Type
 */
export interface FactoriesFactory {
  <A extends AnyObject, B extends AnyKey = typeof DISCRIMINANT_PROPERTY>(
    a: A,
    b?: B,
  ): Factories<B, A>
}

/**
 * Creates factories based on a schema object.
 * @param schema - The schema object containing factory functions.
 * @param key - The key to use for the discriminant property (optional).
 * @returns An object containing the created factories.
 * @category Function
 */
export const createFactories: FactoriesFactory = (
  schema,
  key = DISCRIMINANT_PROPERTY as any,
) =>
  Object.keys(schema).reduce((memo, value) => {
    memo[value] = (...params: any[]) => ({
      [key]: value,
      ...schema[value](...params),
    })

    return memo
  }, Object.create(null))

export default createFactories
