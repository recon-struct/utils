import type { Swap } from '@recon-struct/utility-types/dist/tuple/swap'

/**
 * Swaps two elements in an array.
 *
 * @typeParam A - The type of the array.
 * @typeParam B - The type of the first index.
 * @typeParam C - The type of the second index.
 * @param arr - The array.
 * @param i - The first index.
 * @param j - The second index.
 * @returns The array with the elements swapped.
 */
const swap = <A extends any[], B extends number, C extends number>(
  arr: [...A],
  i: B,
  j: C,
): Swap<[...A], B, C> => {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t

  return arr as Swap<A, B, C>
}

export default swap
