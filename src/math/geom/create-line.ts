import type { Line } from '@recon-struct/utility-types/dist/geometry/line'
import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

/**
 * Creates a line segment between two points.
 *
 * @param start The starting point of the line segment.
 * @param end The ending point of the line segment.
 * @returns The line segment represented as an array containing the start and end points.
 */
const createLine = <A extends Point, B extends Point>(
  start: [...A],
  end: [...B],
): Line<[...A], [...B]> => [start, end]

export default createLine
