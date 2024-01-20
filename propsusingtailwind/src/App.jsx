import './App.css'
import Cards from './Cards.jsx'

function App() {

  const brand = {
    title : "Macbook",
    button : "m1 max"
  }

  return (
    <>
      <Cards name="Macbook M1"/>
      <Cards name="Asus VivoBook"/>

    </>
  )
}

export default App
