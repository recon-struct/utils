/**
 * Calculates the slope between two points on a Cartesian plane.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The slope between the two points.
 */
const getSlope = (x1: number, y1: number, x2: number, y2: number): number =>
  (y2 - y1) / (x2 - x1)

export default getSlope
