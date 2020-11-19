import React from 'react'
import { useCounter } from './useCounter'

function CounterHooks() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterHooks
