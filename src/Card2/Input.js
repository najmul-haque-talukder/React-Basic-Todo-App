import React, {useState} from 'react'

function Input(props) {

    let [inputValue, inputHandle] = useState("");
    let inputFun = (e) =>{
        inputHandle(e.target.value)
    }

    let submitFun = (e) =>{
        e.preventDefault()
        props.cardKey(inputValue)
    }


  return (
    <div>
      <form onSubmit={submitFun}>
        <div className='inputDiv'>
            <input onChange={inputFun} placeholder='**Enter your fav Quote'></input>
            <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Input
