import type { Point } from '@recon-struct/utility-types/dist/geometry/point'
import posMod from '../pos-mod'
import getAngle from './get-angle'

const getVectorAngle = <
  A extends Point,
  B extends Point,
  C extends Point,
  D extends Point,
>(
  a: [...A],
  b: [...B],
  c: [...C],
  d: [...D],
) => {
  const angle1 = getAngle(a[0], a[1], b[0], b[1])
  const angle2 = getAngle(c[0], c[1], d[0], d[1])

  return posMod(angle1 - angle2, Math.PI * 2)
}

export default getVectorAngle
