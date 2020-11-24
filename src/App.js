import React from 'react'
// import Counter from './components/state/Counter'
// import SwitchButtonStyled from './components/styling/SwitchButtonStyled'
// import ImageCarousel from './components/ImageCarousel/ImageCarousel'
// import ApisCallApp from './components/apis-call/App'
// import TodoApp from './components/TodoApp/App'
import TodoAppRedux from './components/TodoAppRedux/App'
import { Provider } from 'react-redux'

function App() {
  return (
    <div>
      {/* <ImageCarousel /> */}
      {/* <ApisCallApp /> */}
      <TodoAppRedux />
    </div>
  )
}

export default App
