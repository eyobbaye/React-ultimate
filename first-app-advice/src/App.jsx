import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  async function getAdvice() {
   const res= fetch("https://api.adviceslip.com/advice")
   const data= (await res).json()
   console.log(data)

  }

  return (
    <>
      <div>
        <h1>Advice Slip</h1>
        <button onClick={getAdvice}>Get Advice</button>
      </div>
      
    </>
  )
}

export default App
