import type { BezierCurve } from '@recon-struct/utility-types'
import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

const createBezierCurve = <
  A extends Point,
  B extends Point,
  C extends Point,
  D extends Point,
>(
  start: [...A],
  control1: [...B],
  control2: [...C],
  end: [...D],
): BezierCurve<A, B, C, D> => ({
  type: 'bezier-curve',
  start,
  control1,
  control2,
  end,
})

export default createBezierCurve
