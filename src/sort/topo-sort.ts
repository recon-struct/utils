/**
 * Performs a topological sort on a dependency graph represented by a map.
 * Throws an error if a cyclic dependency is detected.
 *
 * @typeParam A - The type of the nodes in the dependency graph.
 * @param {Map<A, Set<A>>} deps - The dependency graph represented as a map,
 *        where each key represents a node and its value represents its
 *        dependencies.
 * @returns A set containing the nodes in the dependency graph sorted
 *          in topological order.
 * @throws {Error} - If a cyclic dependency is detected.
 * @category Sort
 */
const topoSort = <A>(deps: Map<A, Set<A>>) => {
  const sortedDeps: Set<A> = new Set()
  const visited: Set<A> = new Set()
  const loading: Set<A> = new Set()

  const visit = (node: A) => {
    if (loading.has(node)) {
      throw new Error(`Cyclic dependency detected in ${node}.`)
    }

    if (!visited.has(node)) {
      loading.add(node)

      for (const dependency of deps.get(node) ?? []) {
        visit(dependency)
      }

      visited.add(node)
      loading.delete(node)
      sortedDeps.add(node)
    }
  }

  for (const node of deps.keys()) {
    visit(node)
  }

  return sortedDeps
}

export default topoSort
