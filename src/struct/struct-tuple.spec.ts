import { describe, expect, it } from 'bun:test'
import { DATA_TYPES, STRUCT_TYPES } from './constants'
import structData from './struct-data'
import structTuple from './struct-tuple'

describe('structTuple', () => {
  it('should create a struct tuple from an array of struct data items', () => {
    const actual = structTuple([structData('BigInt64'), structData('Float32')])
    const expected = {
      type: STRUCT_TYPES.Tuple,
      items: [
        {
          type: STRUCT_TYPES.Data,
          dataType: DATA_TYPES.BigInt64,
          byteLength: 8,
        },
        {
          type: STRUCT_TYPES.Data,
          dataType: DATA_TYPES.Float32,
          byteLength: 4,
        },
      ],
      byteLength: 12,
    }

    expect(actual).toEqual(expected as any)
  })

  it('should allow for nested tuples', () => {
    const actual = structTuple([
      structData('BigInt64'),
      structTuple([structData('Float32'), structData('Uint8')]),
    ])
    const expected = {
      type: STRUCT_TYPES.Tuple,
      items: [
        {
          type: STRUCT_TYPES.Data,
          dataType: DATA_TYPES.BigInt64,
          byteLength: 8,
        },
        {
          type: STRUCT_TYPES.Tuple,
          items: [
            {
              type: STRUCT_TYPES.Data,
              dataType: DATA_TYPES.Float32,
              byteLength: 4,
            },
            {
              type: STRUCT_TYPES.Data,
              dataType: DATA_TYPES.Uint8,
              byteLength: 1,
            },
          ],
          byteLength: 5,
        },
      ],
      byteLength: 13,
    }

    expect(actual).toEqual(expected as any)
  })
})
