/**
 * Calculates the midpoint between two points in a 2D coordinate system.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns An object representing the midpoint with `x` and `y` properties.
 */
const getMidPoint = (x1: number, y1: number, x2: number, y2: number) => ({
  x: (x1 + x2) / 2,
  y: (y1 + y2) / 2,
})

export default getMidPoint
