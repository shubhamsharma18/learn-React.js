import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import Addtodo from "./components/addTodo"
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <Addtodo/>
   <Todos/>
   </>
  )
}

export default App
