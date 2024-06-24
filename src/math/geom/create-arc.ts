import type { Arc } from '@recon-struct/utility-types/dist/geometry/arc'
import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

/**
 * Creates an arc object with the specified parameters.
 *
 * @param a - The type of the center point.
 * @param b - The type of the radius.
 * @param c - The type of the start angle.
 * @param d - The type of the end angle.
 * @returns An arc object with the specified parameters.
 */
const createArc = <
  A extends Point,
  B extends number,
  C extends number,
  D extends number,
>(
  center: [...A],
  radius: B,
  startAngle: C,
  endAngle: D,
): Arc<A, B, C, D> => ({
  type: 'arc',
  center,
  radius,
  startAngle,
  endAngle,
})

export default createArc
