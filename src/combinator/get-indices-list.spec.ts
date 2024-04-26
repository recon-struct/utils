import { describe, expect, it } from 'bun:test'
import getIndicesList from './get-indices-list'

describe('getIndicesList', () => {
  it('should return the correct indices list', () => {
    expect(getIndicesList([2, 3, 4])).toEqual([
      [0, 2],
      [2, 5],
      [5, 9],
    ])
    expect(getIndicesList([1, 1, 1, 1])).toEqual([
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ])
    expect(getIndicesList([5])).toEqual([[0, 5]])
    expect(getIndicesList([])).toEqual([])
  })
})
