import React from 'react'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/JsxTutorial'
import './App.css'

function App() {
  

  return (
    <>
      <Greet name="Nitesh"><h3>Using props.children for functional components</h3></Greet>
      <Welcome name="Batman"><h3>Using props.children for class components</h3></Welcome>
      <Hello />
    </>
  )
}

export default App
