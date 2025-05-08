import React, {useState} from 'react'
import Input from './Input'
import Card from './Card'

function Home() {

  let [data, setData] = useState([])

  let cardFun = (value) =>{
    setData([...data, value])
  }



  return (
    <div>
      <Input cardKey={cardFun} />
      <Card data={data} />
    </div>
  )
}

export default Home
