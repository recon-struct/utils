import { GetPaths, Join } from '@recon-struct/utility-types'
import { describe, expect, it } from 'bun:test'
import setDeepProp from './set-deep-prop'

describe('setDeepProp', () => {
  it('should set the deep property value', () => {
    const obj = { a: { b: 'c' } }
    setDeepProp(obj, 'a.b', 'd')
    expect(obj.a.b).toBe('d')
  })

  it('should handle different connector characters', () => {
    const obj = { a: { b: 'c' } }
    setDeepProp(obj, 'a/b', 'd', '/')
    expect(obj.a.b).toBe('d')
  })

  it('should throw an error if the key does not exist', () => {
    const obj = { a: { b: 'c' } }
    expect(() =>
      setDeepProp(obj, 'a.b.c' as Join<GetPaths<typeof obj>, '.'>, 'd'),
    ).toThrow()
  })
})
