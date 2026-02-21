import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <form className='flex flex-col border-2 border-gray px-2 py-5 h-[20rem]'>
          <div>

            <label for="">Name</label>
            <input className="px-3 py-2" type="text" placeholder="enter your name"></input>
          </div>

          <div>
            <label for="">Password</label>
            <input className="px-3 py-2" type="password" placeholder="enter your password"></input>
          </div>

        </form>
      </div>



    </>
  )
}

export default App
