import type { EndsWith } from '@recon-struct/utility-types/dist/string/antecedent/ends-with'

/**
 * Checks if a string ends with a specified suffix.
 * @typeParam A - The type of the input string.
 * @typeParam B - The type of the suffix.
 * @param val - The string to check.
 * @param suffix - The suffix to check against.
 * @returns `true` if the string ends with the specified suffix, `false` otherwise.
 */
const endsWith = <A extends string, B extends string>(val: A, suffix: B) => {
  return val.endsWith(suffix) as EndsWith<A, B>
}

export default endsWith
