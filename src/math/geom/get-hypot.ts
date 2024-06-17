/**
 * Calculates the hypotenuse between two points in a 2D plane.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The hypotenuse between the two points.
 */
const getHypot = (x1: number, y1: number, x2: number, y2: number): number => {
  const dx = x2 - x1
  const dy = y2 - y1

  return Math.sqrt(dx ** 2 + dy ** 2)
}

export default getHypot
