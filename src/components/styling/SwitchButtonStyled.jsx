import React, { useState } from 'react'
import styled from 'styled-components'

const SwitchButtonStyled = styled.button`
  background-color: ${(props) => (props.isOn ? 'red' : 'green')};
  color: white;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
`

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false)

  const handleClick = () => {
    setIsOn(!isOn)
  }

  return (
    <SwitchButtonStyled onClick={handleClick} isOn={isOn}>
      TURN {isOn ? 'OFF' : 'ON'}
    </SwitchButtonStyled>
  )
}
