import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const id =useRef(null)
  console.log(id);
  
function start(){

  if(id.current!=null){
    return
  }
   id.current=setInterval(() => {
    setTime(time=>time+1)
  }, 1000);
}
function stop(){
  clearInterval(id.current)
  id.current=null
}
function reset(){
  stop()
  setTime(0)
}
  return (
    <>
    
    <h2>Stop-Watch : {time}</h2>
    <button onClick={start}>Start</button>
    <button  onClick={stop} >Stop</button>
    <button onClick={reset} >Reset</button>
    </>
  )
}

export default App
