/**
 * Calculates the bounding box of a set of points.
 *
 * @param vals - The values representing the points. The number of values must be even.
 * @returns An array representing the bounding box in the format [minX, minY, maxX, maxY].
 * @throws {Error} If the number of values is not even.
 * @category Math
 */
const getBoundingBox = (
  ...vals: number[]
): [number, number, number, number] => {
  if (vals.length % 2 !== 0) {
    throw new Error('The number of values must be even.')
  }

  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (let i = 0; i < vals.length; i += 2) {
    const x = vals[i]
    const y = vals[i + 1]

    if (x < minX) {
      minX = x
    }

    if (x > maxX) {
      maxX = x
    }

    if (y < minY) {
      minY = y
    }

    if (y > maxY) {
      maxY = y
    }
  }

  return [minX, minY, maxX, maxY]
}

export default getBoundingBox
