import { divide } from './math'

// คำสั่งนะครับ --> npm run test

describe('divide', () => {
  test('4 divided by 2 should be 2', () => {
    expect(divide(4, 2)).toBe(2)
  })

  test('divided by 0 should throw error', () => {
    expect(() => {
      divide(4, 0)
    }).toThrowError()
  })
})
