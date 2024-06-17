import getSlope from './get-slope'

interface GetYIntercept {
  (x1: number, y1: number, x2: number, y2: number): number
  (slope: number, x: number, y: number): number
}

/**
 * Calculates the y-intercept of a line given the slope and a point on the line.
 * If four parameters are provided, it calculates the slope using two points on
 * the line.
 *
 * @param params - The parameters required to calculate the y-intercept.
 * @returns The y-intercept of the line.
 * @category Math
 */
const getYIntercept: GetYIntercept = (...params: number[]) => {
  let x1: number
  let y1: number
  let slope: number

  if (params.length === 4) {
    ;[x1, y1] = params
    const [, , x2, y2] = params

    slope = getSlope(x1, y1, x2, y2)
  } else {
    ;[slope, x1, y1] = params
  }

  return y1 - slope * x1
}

export default getYIntercept
