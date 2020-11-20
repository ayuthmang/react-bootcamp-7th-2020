import { render, fireEvent } from '@testing-library/react'
import SwitchButton from './SwitchButton'

test('it should turn-on when clicked', () => {
  const { getByText } = render(<SwitchButton />)

  const btn = getByText(/TURN ON/)
  fireEvent.click(btn)

  expect(btn).toHaveTextContent(/TURN OFF/)
})
