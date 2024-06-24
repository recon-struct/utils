import type { Circle } from '@recon-struct/utility-types/dist/geometry/circle'
import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

/**
 * Creates a circle object with the specified center and radius.
 *
 * @typeParam A - The type of the center point.
 * @typeParam B - The type of the radius.
 * @param {A} center - The center point of the circle.
 * @param {B} radius - The radius of the circle.
 * @returns - The created circle object.
 */
const createCircle = <A extends Point, B extends number>(
  center: [...A],
  radius: B,
): Circle<A, B> => ({
  type: 'circle',
  center,
  radius,
})

export default createCircle
