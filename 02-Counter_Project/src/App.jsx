import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counterValue, setCounterValue] = useState(1)

  // let counterValue = 5
  const addValue = () => {
    if(counterValue < 20){
      setCounterValue(counterValue + 1)
    }
  }

  const subValue = () => {
    if(counterValue >= 1){
      setCounterValue(counterValue - 1)
    }
  }
  return (
    <>
      <h1>Learning React with Chai aur Code</h1>
      <h2>Counter Value : {counterValue}</h2>

      <button
      onClick={addValue}
      >Add Value</button> <br />
      <button
      onClick={subValue}
      >Subtract Value</button>

      <p>Display Value : {counterValue}</p>

    </>
  )
}

export default App
