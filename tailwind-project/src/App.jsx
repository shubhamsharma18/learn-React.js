import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let arr=[4,6,7,7]
  return (
    <>
    <h1 className='mb-4'>I am in APP file</h1>
  <Card username="John Cena" location="New york" arr1={arr}/>
  <Card username="Brock Lesnar" location="Paris" />
    </>
  )
}

export default App
