/**
 * Returns an array with unique values.
 *
 * @param params - The values to be filtered for uniqueness.
 * @returns An array with unique values.
 */
const uniq = <A extends any[]>(...params: A) =>
  params.flat().filter((value, index, array) => array.indexOf(value) === index)

export default uniq
