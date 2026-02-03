import React from 'react'


const Child =React.memo( ({val}) => {
    console.log("Child re-render....");

  return (
    <>
   <div style={{border:"2px solid grey"}}>
     <h3>I am Child component</h3>
    <h3>My value is {val}</h3>
   </div>
    </>
  )
})

export default Child