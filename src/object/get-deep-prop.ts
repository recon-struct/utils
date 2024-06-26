import type { GetPathValue } from '@recon-struct/utility-types/dist/object/get-path-value'
import type { GetPaths } from '@recon-struct/utility-types/dist/object/get-paths'
import type { Split } from '@recon-struct/utility-types/dist/string/split'
import type { Join } from '@recon-struct/utility-types/dist/tuple/join'

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
  A extends object,
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
