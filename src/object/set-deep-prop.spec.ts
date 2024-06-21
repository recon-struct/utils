import { GetPaths } from '@recon-struct/utility-types/dist/object/get-paths'
import { Join } from '@recon-struct/utility-types/dist/tuple/join'
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

  it('should support any string as a property not containing the separator', () => {
    const obj = { a: { 'Content-Length': 'c' } }
    setDeepProp(obj, 'a.Content-Length', 'd')
    expect(obj.a['Content-Length']).toBe('d')
  })
})
