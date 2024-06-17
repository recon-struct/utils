interface RotatePoint {
  (
    px: number,
    py: number,
    cx: number,
    cy: number,
    angle: number,
  ): [number, number]
  (px: number, py: number, angle: number): [number, number]
}

/**
 * Rotates a point around a given center point by a specified angle.
 *
 * @param px - The x-coordinate of the point to rotate.
 * @param py - The y-coordinate of the point to rotate.
 * @param cx - The x-coordinate of the center point.
 * @param cy - The y-coordinate of the center point.
 * @param radians - The angle in radians by which to rotate the point.
 * @returns An array containing the new x and y coordinates of the rotated point.
 * @category Math
 */
const rotatePoint: RotatePoint = (...params: any) => {
  let px: number
  let py: number
  let cx: number
  let cy: number
  let angle: number

  if (params.length === 5) {
    ;[px, py, cx, cy, angle] = params
  } else if (params.length === 3) {
    ;[px, py, angle] = params
    cx = 0
    cy = 0
  } else {
    throw new Error('rotatePoint requires either 3 or 5 arguments')
  }

  const s = Math.sin(angle)
  const c = Math.cos(angle)

  // translate point back to origin:
  px -= cx
  py -= cy

  // rotate point
  const xnew = px * c - py * s
  const ynew = px * s + py * c

  // translate point back:
  return [xnew + cx, ynew + cy]
}

export default rotatePoint
