import React, { useState } from 'react'
import { useCounter } from './useCounter'

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false)
  const { count, increment } = useCounter()

  const handleClick = () => {
    if (count >= 10) {
      return
    }
    setIsOn(!isOn)
    increment()
  }

  return (
    <div>
      <button onClick={handleClick}>TURN {isOn ? 'OFF' : 'ON'}</button>
      <p>Clicked {count} times</p>
    </div>
  )
}
