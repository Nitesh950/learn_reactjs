import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addVal = () => {
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }
    
  };

  const decreaseVal = () => {
    
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
    }
    
  };

  return (
    <>
      <h1>Increase or decrease count</h1>
      <p>(Maximum value is 20 and minimum value is 0)</p>
      <h2>Counter : {counter}</h2>
      <button onClick={addVal}>Increase Count</button>
      <br />
      <br />
      <button onClick={decreaseVal}>Decrease Count</button>
    </>
  );
}

export default App;
