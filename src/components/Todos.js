import React from 'react'
import Todo from './Todo';

function Todos(props, index) {
  return (
    <div>
      {props.data.map(data =>(
        <Todo data={data} key={index}/>
        ))}
    </div>
  )
}

export default Todos;
