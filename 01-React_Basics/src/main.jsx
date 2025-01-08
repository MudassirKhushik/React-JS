import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1> Custom App</h1>
    </div>
  )
}

// This code is converted into the code given below. 
// We write that directly to check if we save one step of the bundler

// const reactElement = {
//   type : 'a',
//   props : {
//     href : 'https://google.com',
//     target : '_blank',
//   },
//   Children : 'Click me to visit Google'
// }


const anotherUser = " Mudassir Khushik"

// This is used in another way
// This React contains the createElement method and has special Syntax
const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank',
  },
  'Click me to visit Google',
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target="_blank"> Visit Google</a>
)
 

createRoot(document.getElementById('root')).render(
  
//    {/* <reactElement/> This is an object and an object is not called like a function {Neither reactElement(), nor reactElement} */}

    //anotherElement // This will work 
//    {/* This will work because we are using correct syntax and reactElement doesn't have the correct syntax */}

//    <App />

// After creating the reactElement in a proper syntax we can call it
  reactElement
)
