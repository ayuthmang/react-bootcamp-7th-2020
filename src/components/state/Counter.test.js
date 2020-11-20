import { render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

test('Counter can increment, decrement, and reset', () => {
  // Arrange
  const { getByText, debug } = render(<Counter />)
  const btnIncrement = getByText('+1')
  const btnDecrement = getByText('-1')
  const btnReset = getByText('reset')
  debug()

  // Act & Assert
  fireEvent.click(btnIncrement)
  expect(getByText(/Counter: 1/)).toBeInTheDocument()

  fireEvent.click(btnDecrement)
  fireEvent.click(btnDecrement)
  expect(getByText(/Counter: -1/)).toBeInTheDocument()

  fireEvent.click(btnReset)
  expect(getByText(/Counter: 0/)).toBeInTheDocument()
})
