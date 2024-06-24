import type { Path } from '@recon-struct/utility-types/dist/geometry/path'
import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

/**
 * @typeParam A - The type of the points in the path.
 * @typeParam B - The type of the isClosed flag.
 * @param points - The points in the path.
 * @param isClosed - A flag indicating whether the path is closed.
 * @returns An object representing the path.
 */
const createPath = <A extends Point[], B extends boolean = true>(
  points: [...A],
  isClosed: B = true as B,
): Path<[...A], B> => ({
  type: 'path',
  points,
  isClosed,
})

export default createPath
