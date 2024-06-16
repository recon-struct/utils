const perf = (fn: Function, times: number) => {
  const start = performance.now()

  for (let i = 0; i < times; i++) {
    fn()
  }

  return performance.now() - start
}

export default perf
