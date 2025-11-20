import { useState } from 'react'
import './App.css'

function App() {
 
const [color,setColor]=useState("olive")


  return (
    <div className='h-screen w-full flex  justify-center items-center' style={{backgroundColor:color}}>
<div className="bg-gray-700 flex flex-row p-6 gap-4  ">

<button onClick={()=>setColor("red")}
 className='bg-red-500 rounded px-6'>RED</button>
<button onClick={()=>setColor("green")}
className='bg-green-500 rounded px-6'>GREEN</button>
<button onClick={()=>setColor("blue")}
className='bg-blue-500 rounded px-6'>BLUE</button>
<button onClick={()=>setColor("purple")}
className='bg-purple-500 rounded px-6'>PURPLE</button>
<button onClick={()=>setColor("white")}
className='bg-white text-black rounded px-8'>WHITE</button>
<button onClick={()=>setColor("yellow")}
className='bg-yellow-500 rounded px-6'>YELLOW</button>


</div>

    </div>
  )
}

export default App
