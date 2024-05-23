export interface Reduce {
  <A, B>(
    func: (acc: B, item: A, index: number) => B,
    items: Iterable<A>,
    acc: B,
  ): B
}

/**
 * Applies a function against an accumulator and each element in the array (from
 * left to right) to reduce it to a single value.
 *
 * @template T - The type of the elements in the array.
 * @param - The function to execute on each element in the array.
 * @param items - The array to iterate over.
 * @param initialValue - The initial value of the accumulator.
 * @returns - The reduced value.
 */
const reduce: Reduce = (func, items, initialValue) => {
  let index = 0
  let acc = initialValue

  for (const item of items) {
    acc = func(acc, item, index++)
  }

  return acc
}

export default reduce
