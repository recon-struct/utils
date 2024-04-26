/**
 * Combines two functions into a single function that takes a parameter and applies both functions to it.
 * @typeParam A - The type of the intermediate result of `b` and `c`.
 * @typeParam B - The type of the final result of the combined function.
 * @typeParam C - The type of the parameter `d`.
 * @param a - The function that combines the results of `b` and `c`.
 * @returns A new function that takes a parameter `d` and applies `b`, `c`, and `a` to it.
 * @category Function
 */
const combine =
  <A, B>(a: (_1: A, _2: A) => B) =>
  <C>(b: (_: C) => A, c: (_: C) => A) =>
  (d: C) =>
    a(b(d), c(d))

export default combine
