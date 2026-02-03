import { useState } from 'react'
import Child from './Child'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [val, setVal] = useState(1)
console.log("Parent re-render....");


const memorizeVal=useMemo(()=>{
  let sum=0
  for(let i=1;i<=100000000*val;i++){
     sum=sum+i
  }
  return sum
}
,[val])

console.log(memorizeVal);



  return (

 <>
 <h3>Count is {count}</h3>
 <button onClick={()=>setCount(count+1)}>Increment Count</button>
 <button onClick={()=>setVal(val+1)}>Value Change button</button>
 <Child val={val}/>
 </>
  )
}

export default App
