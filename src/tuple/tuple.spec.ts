import { Tuple } from '@recon-struct/utility-types'
import { describe, expect, it } from 'bun:test'
import tuple from './tuple'

describe('tuple', () => {
  it('creates a tuple with the specified number of items, all initialized to the same value', () => {
    const actual = tuple(3, 'a')
    const expected = ['a', 'a', 'a'] as Tuple<3, string>

    expect(actual).toEqual(expected)
  })
})
