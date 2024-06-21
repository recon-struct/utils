import type { StartsWith } from '@recon-struct/utility-types/dist/string/antecedent/starts-with'

/**
 * Checks if a string starts with a specified prefix.
 * @typeParam A - The type of the input string.
 * @typeParam B - The type of the prefix.
 * @param val - The string to check.
 * @param prefix - The prefix to check against.
 * @returns `true` if the string starts with the specified prefix, `false` otherwise.
 */
const startsWith = <A extends string, B extends string>(val: A, prefix: B) => {
  return val.startsWith(prefix) as StartsWith<A, B>
}

export default startsWith
