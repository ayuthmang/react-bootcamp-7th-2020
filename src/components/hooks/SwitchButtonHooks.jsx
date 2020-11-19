import React, { useState } from 'react'

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false)

  const handleClick = () => {
    setIsOn(!isOn)
  }

  return <button onClick={handleClick}>TURN {isOn ? 'OFF' : 'ON'}</button>
}
