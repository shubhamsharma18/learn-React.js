import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mystore from "./zustand"
import Navbar from "./components/Navbar"
function App() {
  const [count, setCount] = useState(0)
const store=mystore()
console.log(store);

  return (
  <>
  <h1>Hello Hi !</h1>
  <Navbar/>
  </>
  )
}

export default App
