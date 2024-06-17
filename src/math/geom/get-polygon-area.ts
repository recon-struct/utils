/**
 * Calculates the area of a polygon defined by its vertices.
 *
 * @param {...number[]} vals - The coordinates of the polygon's vertices. The values must be provided in pairs, where the first value represents the x-coordinate and the second value represents the y-coordinate.
 * @returns {number} The area of the polygon.
 * @throws {Error} If the number of values is not even.
 * @category Math
 */
const getPolygonArea = (...vals: number[]): number => {
  if (vals.length % 2 !== 0) {
    throw new Error('The number of values must be even.')
  }

  let area = 0

  for (let i = 0; i < vals.length; i += 2) {
    const x1 = vals[i]
    const y1 = vals[i + 1]
    const x2 = vals[(i + 2) % vals.length]
    const y2 = vals[(i + 3) % vals.length]
    area += x1 * y2 - x2 * y1
  }

  return Math.abs(area / 2)
}

export default getPolygonArea
