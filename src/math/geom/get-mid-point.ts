import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

/**
 * Calculates the midpoint between two points.
 *
 * @param x1 - The x-coordinate of the first point.
 * @param y1 - The y-coordinate of the first point.
 * @param x2 - The x-coordinate of the second point.
 * @param y2 - The y-coordinate of the second point.
 * @returns The midpoint as an array containing the x and y coordinates.
 */
const getMidPoint = (x1: number, y1: number, x2: number, y2: number): Point => [
  (x1 + x2) / 2,
  (y1 + y2) / 2,
]

export default getMidPoint
