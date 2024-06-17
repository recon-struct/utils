import getSlope from './get-slope'
import getYIntercept from './get-y-intercept'

const getIntersection = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number,
) => {
  const slope1 = getSlope(x1, y1, x2, y2)
  const slope2 = getSlope(x3, y3, x4, y4)

  if (slope1 === slope2) {
    return null
  }

  const intercept1 = getYIntercept(slope1, x1, y1)
  const intercept2 = getYIntercept(slope2, x3, y3)
  const x = (intercept2 - intercept1) / (slope1 - slope2)
  const y = slope1 * x + intercept1

  return [x, y]
}

export default getIntersection
