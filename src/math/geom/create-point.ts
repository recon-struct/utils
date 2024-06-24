import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

const createPoint = <A extends number, B extends number>(
  a: A,
  b: B,
): Point<A, B> => [a, b]

export default createPoint
