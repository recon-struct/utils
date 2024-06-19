/**
 * Calculates the vector between two points.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The vector as an array of two numbers.
 * @category Math
 */
const getVector = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): [number, number] => {
  return [x2 - x1, y2 - y1]
}

export default getVector
