const getLerp = (min: number, max: number, norm: number) => {
  const delta = max - min

  return min + delta * norm
}

export default getLerp
