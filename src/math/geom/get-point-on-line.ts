/**
 * Calculates the coordinates of a point on a line segment given the start and end points,
 * and a parameter `position` that represents the position of the point along the line segment.
 *
 * @param x1 The x-coordinate of the start point of the line segment.
 * @param y1 The y-coordinate of the start point of the line segment.
 * @param x2 The x-coordinate of the end point of the line segment.
 * @param y2 The y-coordinate of the end point of the line segment.
 * @param pos The parameter that represents the position of the point along the line segment.
 * @returns An object containing the x and y coordinates of the point on the line segment.
 */
const getPointOnLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  pos: number,
) => ({
  x: x1 + (x2 - x1) * pos,
  y: y1 + (y2 - y1) * pos,
})

export default getPointOnLine
