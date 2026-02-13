import React, { useState } from 'react'
import './App.css';
function App() {
  const [count, setCount] = useState(0)
  
  const addValue = () =>{
      if(count<20){
        setCount(count+1);
      }
  }
   const removeValue = () =>{
      if(count>0){
        setCount(count-1);
      }
  }

  return (
    <>
   <h1>JAY SHREE RAM</h1>
   <button onClick={addValue}>addValue {count}</button>
   <button onClick={ removeValue}>removeValue {count}</button>
    </>
  )
}

export default App
