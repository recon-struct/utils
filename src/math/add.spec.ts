import { describe, expect, it } from 'bun:test'
import add from './add'

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })

  it('should concatenate two strings correctly', () => {
    expect(add('Hello', ' World')).toBe('Hello World')
    expect(add('foo', 'bar')).toBe('foobar')
  })

  it('should convert number to string when adding a number and a string', () => {
    expect(add(5, ' apples')).toBe('5 apples')
    expect(add(-10, ' degrees')).toBe('-10 degrees')
  })

  it('should convert number to string when adding a string and a number', () => {
    expect(add('Total: ', 100)).toBe('Total: 100')
    expect(add('The answer is: ', -42)).toBe('The answer is: -42')
  })
})
