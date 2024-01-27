import React, { useState } from 'react'
import Button from './CustomButton.jsx'


function App() {
  const [color, setColor] = useState("black")
  
  const handleClick = (color) => {
    setColor(color);
  }
  return (
    <div className='w-full h-screen flex justify-center align-bottom'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap bottom-10 p-2 gap-4 rounded-xl'
      style={{backgroundColor:"white"}}>
        <Button color="red" onClick={ () => handleClick("red")}/>
        <Button color="green" onClick={ () => handleClick("green")}/>
        <Button color="blue" onClick={ () => handleClick("blue")}/>
        <Button color="yellow" onClick={ () => handleClick("yellow")}/>
        <Button color="purple" onClick={ () => handleClick("purple")}/>
        <Button color="orange" onClick={ () => handleClick("orange")}/>
      </div>
      
    </div>
  )
}

export default App
