import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [advice, setAdvice] =useState("")
  const [count, setCount] = useState(0)
  const [currentDate, setCurrentDate] = useState("currentDate")


  
  async function getAdvice() {
   const res=await fetch("https://api.adviceslip.com/advice")
   const data=  await res.json()
   setCount (count + 1)
   setAdvice(data.slip.advice)
   const today = new Date();
   const currentDate = today.toLocaleDateString() ;
   setCurrentDate(currentDate)         


  }
  useEffect (()=>{
    getAdvice()
  },[])

  return (
    <>
      <div>
        <p>Date: {currentDate}</p>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <Message count={count} />
      </div>
      
    </>
  )
}

function Message(props){
  return(
 <p>Advice Count:{props.count}</p>
  )
}
export default App
