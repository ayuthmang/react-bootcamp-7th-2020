import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }))
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

export default Counter
