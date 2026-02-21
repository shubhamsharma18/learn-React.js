import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './AuthPage'
import Admin from './Admin'
import User from './User'
function App() {
  const [count, setCount] = useState(0)
const [user,setUser]=useState(false)
const [admin,setAdmin]=useState(false)
  return (
    <>

  {user?<User/>:admin?<Admin/>: <AuthPage setUser={setUser} setAdmin={setAdmin}/>}
 
 </>
  )
}

export default App
