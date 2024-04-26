import type { Includes } from '@recon-struct/utility-types'

/**
 * Checks if a string includes another string.
 * @typeParam A - The type of the `val` string.
 * @typeParam B - The type of the `search` string.
 * @param val - The string to search within.
 * @param search - The string to search for.
 * @returns A boolean indicating whether the `val` string includes the `search` string.
 */
const includes = <A extends string, B extends string>(val: A, search: B) => {
  return val.includes(search) as Includes<A, B>
}

export default includes
