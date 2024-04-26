import type {
  DeepObject,
  GetKeys,
} from '@recon-struct/utility-types/dist/object/get-keys'
import type { GetValue } from '@recon-struct/utility-types/dist/object/get-value'

/**
 * Get a deep property from an object
 *
 * @typeParam A - The type of the object
 * @typeParam B - The type of the key
 * @typeParam C - The type of the connector
 * @param ref - The object
 * @param key - The key
 * @param connector - The connector
 * @example
 * ```
 * getDeepProp({ a: { b: 'c' } }, 'a.b') // 'c'
 * ```
 * @category Object
 */
const getDeepProp = <
  A extends DeepObject,
  B extends GetKeys<A, C>,
  C extends string = '.',
>(
  ref: A,
  key: B,
  connector: C = '.' as C,
): GetValue<A, B, C> => {
  const subKeys = (key as string).split(connector)

  return subKeys.reduce((memo: any, subKey) => memo[subKey], ref)
}

export default getDeepProp
