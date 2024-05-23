interface Map {
  <A, B>(func: (item: A, index: number) => B, items: Iterable<A>): B[]
}

const map: Map = (func, items) => {
  const result: ReturnType<typeof func>[] = []
  let index = 0

  for (const item of items) {
    result.push(func(item, index++))
  }

  return result
}

export default map
