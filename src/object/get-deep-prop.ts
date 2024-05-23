import type {
  AnyKey,
  AnyPrimitive,
  GetPathValue,
  GetPaths,
  Join,
  Split,
} from '@recon-struct/utility-types'

export interface DeepObject {
  [key: AnyKey]: DeepObject | AnyPrimitive
}

/**
 * Get a deep property from an object
 *
 * @typeParam A - The type of the object
 * @typeParam B - The type of the key
 * @typeParam C - The type of the connector
 * @param ref - The object
 * @param key - The key
 * @param separator - The connector
 * @example
 * ```
 * const ex1 = getDeepProp({ a: { b: 'c' } } as const, 'a.b') // 'c'
 * ```
 * @category Object
 */
const getDeepProp = <
  A extends DeepObject,
  B extends Join<GetPaths<A>, C>,
  C extends string = '.',
>(
  ref: A,
  key: B,
  separator: C = '.' as C,
): GetPathValue<A, Split<B, C>> => {
  const subKeys = (key as string).split(separator)

  return subKeys.reduce((memo: any, subKey) => memo[subKey], ref)
}

export default getDeepProp
