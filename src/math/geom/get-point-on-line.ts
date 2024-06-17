import getLerp from '../get-lerp'

/**
 * Calculates the coordinates of a point on a line segment given the normalized distance.
 *
 * @param x1 - The x-coordinate of the starting point of the line segment.
 * @param y1 - The y-coordinate of the starting point of the line segment.
 * @param x2 - The x-coordinate of the ending point of the line segment.
 * @param y2 - The y-coordinate of the ending point of the line segment.
 * @param norm - The normalized distance along the line segment (between 0 and 1).
 * @returns An object with the x and y coordinates of the point on the line segment.
 * @category Math
 */
const getPointOnLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  norm: number,
) => [getLerp(x1, x2, norm), getLerp(y1, y2, norm)]

export default getPointOnLine
