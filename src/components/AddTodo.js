import React, { useState } from 'react'

function AddTodo(props) {

    let [todowrite, todoWriteHandle] = useState("")
    

    let inputFun = (e)=>{
        todoWriteHandle(e.target.value)
    }

    let submitFun = (e)=>{
        e.preventDefault()
        props.addTodoKey(todowrite)
    }



  return (
    <div>
      <form className="inputDiv" onSubmit={submitFun}>
        <div>
        <h2 className='heading'>Todo Apps</h2>
            <input placeholder='**Save youre Fav Quoue, Hehe...' onChange={inputFun} value={todowrite}></input>
            <button>Add</button>
        </div>

      </form>
    </div>
  )
}

export default AddTodo
