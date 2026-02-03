import { useState, useCallback } from "react";
import Child from "./Child";
import "./App.css"
function App(){
  const [count,setCount]=useState(0)
  const [n,setN]=useState(5)
  const [sum,setSum]=useState(0)

  const calculation=useCallback(()=>{


    let totol=0
    for(let i=1;i<=n;i++){
      totol+=i
    }
    setSum(totol)
  },[n])
  console.log("Parent re-render");
  
  return(
    <>
    <h1>This is callback Hook working which memoize the function</h1>
<h2>Sum is {sum}</h2>
<h2>Count is {count}</h2>
    <button onClick={()=>setCount(count+1)}>Count increment</button>
    <button onClick={()=>setN(n+1)}>N increment</button>
    
    <Child calculation={calculation}/>
    
    </>
  )
}
export default App;
