/**
 * Generate all ordered groupings up to the value of n.
 * @param n - The maximum number in the permutation set.
 * @returns An array of arrays representing the permutations.
 * @category Combinator
 */
const getOrderedGroupings = (n: number) => {
  if (n < 0)
    throw new Error('The value of n must be greater than or equal to 0.')

  if (n === 0) return []

  const generators: ((...x: number[]) => number[][])[] = []

  for (let i = 1; i <= n; i++) {
    const generator = (...x: number[]) => {
      const permSet = [[...x, i]]

      for (let j = i - 1; j >= 1; j--) {
        permSet.push(...generators[j - 1](...x, i - j))
      }

      return permSet
    }

    generators.push(generator)
  }

  return generators[generators.length - 1]()
}

export default getOrderedGroupings
