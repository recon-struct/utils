/**
 * Swaps the order of arguments for a given function.
 *
 * @param f - The function to swap arguments for.
 * @returns A new function that takes the arguments in reverse order.
 * @category Function
 */
const swap =
  <A, B>(f: (a: A, b: A) => B) =>
  (b: A, a: A) =>
    f(a, b)

export default swap
