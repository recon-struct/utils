import type { Point } from '@recon-struct/utility-types'

/**
 * Creates a quadratic curve object.
 *
 * @param start - The starting point of the curve.
 * @param control - The control point of the curve.
 * @param end - The ending point of the curve.
 * @returns A quadratic curve object with the specified start, control, and end points.
 */
const createQuadraticCurve = <
  A extends Point,
  B extends Point,
  C extends Point,
>(
  start: [...A],
  control: [...B],
  end: [...C],
) => ({
  type: 'quadratic-curve',
  start,
  control,
  end,
})

export default createQuadraticCurve
