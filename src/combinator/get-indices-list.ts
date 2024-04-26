/**
 * Returns a list of indices based on the given spans.
 * Each span represents the number of elements in a section.
 * The indices are represented as pairs [start, end], where start is the
 * inclusive start index and end is the exclusive end index.
 * @param spans - An array of numbers representing the spans of each section.
 * @returns An array of index pairs representing the start and end indices of
 *          each section.
 * @category Combinator
 */
const getIndicesList = (spans: number[]) => {
  let index = 0
  const indicesList: [number, number][] = []

  for (const span of spans) {
    const start = index
    index += span
    const end = index
    indicesList.push([start, end])
  }

  return indicesList
}

export default getIndicesList
