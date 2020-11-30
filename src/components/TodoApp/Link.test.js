import { render, fireEvent } from '@testing-library/react'
import Link from './Link'

test('it should renders text when active props passed', () => {
  const func = jest.fn()
  const { getByText } = render(
    <Link active onClick={func}>
      Active
    </Link>
  )

  const link = getByText(/active/i)
  fireEvent.click(link)

  expect(func).not.toHaveBeenCalled()
})

test('it should call a func when user clicked', () => {
  const func = jest.fn()
  const { getByText } = render(
    <Link active={false} onClick={func}>
      Active
    </Link>
  )

  const link = getByText(/active/i)
  fireEvent.click(link)

  expect(func).toHaveBeenCalled()
})
