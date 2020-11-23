import { useRef } from 'react'

const AddTodo = (props) => {
  const todoRef = useRef()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const input = todoRef.current.value
          if (input !== '') {
            props.onSubmit(input)
            todoRef.current.value = ''
          }
        }}
      >
        <input ref={todoRef} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo