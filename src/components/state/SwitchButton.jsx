import React from 'react'

class SwitchButton extends React.Component {
  state = {
    isOn: false,
  }

  handleClick = () => {
    this.setState({
      isOn: !this.state.isOn,
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        TURN {this.state.isOn ? 'OFF' : 'ON'}
      </button>
    )
  }
}

export default SwitchButton
