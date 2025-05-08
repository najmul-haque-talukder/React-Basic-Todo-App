import React from 'react'

function Todo(props, index) {
  return (
    <div>
      <p key={index}>{props.data}</p>
    </div>
  )
}

export default Todo
