import React, { useState } from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo';


function Home() {
    let [todo, setTodo] = useState([])

    let addTodoPropsFun = (value)=>{
        setTodo([...todo, value])
    }



  return (
    <div>
      <AddTodo addTodoKey={addTodoPropsFun} />
      <Todos data={todo}/>
    </div>
  )
}

export default Home;
