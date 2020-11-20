export const divide = (x, y) => {
  if (y === 0) {
    throw new Error('cannot divided by 0')
  }
  return x / y
}
