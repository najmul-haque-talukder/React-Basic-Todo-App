import React from 'react'

function Card(props) {
    


  return (
    <div>
        {props.data.map((items, index)=> <p key={index}>{items}</p>)}
    
    </div>
  )
}

export default Card
