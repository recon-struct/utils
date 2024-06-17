/**
 * Combines two angles in radians and normalizes the result to be within 0 to 2π.
 * @param angle1 - The first angle in radians.
 * @param angle2 - The second angle in radians.
 * @returns The combined angle normalized to the range 0 to 2π.
 * @category Math
 */
function addAngles(angle1: number, angle2: number): number {
  const combinedAngle = angle1 + angle2
  const normalizedAngle = combinedAngle % (2 * Math.PI)

  return normalizedAngle < 0 ? normalizedAngle + 2 * Math.PI : normalizedAngle
}

export default addAngles
