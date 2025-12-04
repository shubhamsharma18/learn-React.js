import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Popup from './Popup'


function App() {
  const [popup, setPopup] = useState(false)

  return (
   <>

   <div className="h-screen w-full bg-black text-white flex items-center justify-center">

    <button  onClick={()=>{
      setPopup(true)
    }} className=' bg-[tomato] border-4 border-red-900 px-4 py-3 rounded-3xl'>Click me</button>
   </div>
{
  popup && <Popup setPopup={setPopup} popup={popup}/>
}
  

   </>
  )
}

export default App
