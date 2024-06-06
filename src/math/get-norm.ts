const getNorm = (start: number, end: number, value: number): number => {
  const min = Math.min(start, end)
  const max = Math.max(start, end)

  if (value < min || value > max) {
    throw new Error('Value out of range')
  }

  const delta = end - start
  const norm = (value - start) / delta

  return norm === -0 ? 0 : norm
}

export default getNorm
