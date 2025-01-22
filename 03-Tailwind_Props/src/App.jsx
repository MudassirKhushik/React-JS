import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "Mudassir Khushik",
    department : "Software"
  }

  let myArr = [74]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Learning Tailwind</h1>
      Roll no = {myArr} 
      {/* In this way we can add our react component or any value */}
      <Cards  username="Mudassir Khushik" profession="Student"/>      
      <Cards  username="Muhammad Ali" profession="Employee"/>      
    </>
  )
}

export default App