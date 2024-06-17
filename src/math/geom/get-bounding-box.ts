const getBoundingBox = (
  ...vals: number[]
): [number, number, number, number] => {
  if (vals.length % 2 !== 0) {
    throw new Error('The number of values must be even.')
  }

  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (let i = 0; i < vals.length; i += 2) {
    const x = vals[i]
    const y = vals[i + 1]

    if (x < minX) {
      minX = x
    }

    if (x > maxX) {
      maxX = x
    }

    if (y < minY) {
      minY = y
    }

    if (y > maxY) {
      maxY = y
    }
  }

  return [minX, minY, maxX, maxY]
}

export default getBoundingBox
