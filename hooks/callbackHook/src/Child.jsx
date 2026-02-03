import React from "react";

const Child =React.memo(({calculation})=>{
      console.log("Child re-render");
    return(
    <>
<div style={{border:"2px solid red"}}>
 <h1>I am child component</h1>
    <button onClick={calculation}>Calculate Sum</button>
    
</div>
   
    
    
    
    </>
    )
})


export default Child;
