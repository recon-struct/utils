import { describe, expect, it } from 'bun:test'
import getSliceGroups from './get-slice-groups'

describe('sliceGroupsFrom', () => {
  it('should slice groups from a given list based on the provided indices', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const indicesList: [number, number][] = [
      [0, 3],
      [3, 6],
      [6, 10],
    ]
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9, 10],
    ]

    const result = getSliceGroups(list, indicesList)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if the list is empty', () => {
    const list: number[] = []
    const indicesList: [number, number][] = [
      [0, 2],
      [3, 5],
    ]
    const expected: number[][] = [[]]

    const result = getSliceGroups(list, indicesList)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if the indices list is empty', () => {
    const list = [1, 2, 3, 4, 5]
    const indicesList: [number, number][] = []
    const expected: number[][] = [[]]

    const result = getSliceGroups(list, indicesList)

    expect(result).toEqual(expected)
  })
})
