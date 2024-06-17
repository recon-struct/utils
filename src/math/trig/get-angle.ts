/**
 * Calculates the angle between two points in radians.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The angle between the two points in radians.
 * @category Math
 */
const getAngle = (x1: number, y1: number, x2: number, y2: number): number =>
  Math.atan2(y2 - y1, x2 - x1)

export default getAngle
