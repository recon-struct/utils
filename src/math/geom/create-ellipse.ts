import type { Point } from '@recon-struct/utility-types/dist/geometry/point'

/**
 * Creates an ellipse object with the specified center, radiusX, and radiusY.
 *
 * @typeParam A - The type of the center point.
 * @typeParam B - The type of the radiusX.
 * @typeParam C - The type of the radiusY.
 * @param {A} center - The center point of the ellipse.
 * @param {B} radiusX - The radius along the x-axis of the ellipse.
 * @param {C} radiusY - The radius along the y-axis of the ellipse.
 * @returns - The created ellipse object.
 */
const createEllipse = <
  A extends Point,
  B extends number,
  C extends number,
  D extends number,
>(
  center: [...A],
  radiusX: B,
  radiusY: C,
  rotation: D,
) => ({
  type: 'ellipse',
  center,
  radiusX,
  radiusY,
  rotation,
})

export default createEllipse
