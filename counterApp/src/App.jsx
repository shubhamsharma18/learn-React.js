import React from "react";
import { useState } from 'react'

function App() {
  let [counter,setcount]=useState(0)

  function increment(){

    if(counter<10){
 setcount(counter+1)
 setcount(counter+1)
 setcount(counter+1)
 setcount(counter+1)
    }
   

  }
    function decrement(){
      if(counter>=1){
setcount(counter-1)
      }
    

  }


  return (
    <>
      
    <h1 className="bg-yellow-600">Count {counter}</h1>
      <button className="bg-green-700" onClick={increment}>Increment</button>
      <button className="bg-red-600" onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
