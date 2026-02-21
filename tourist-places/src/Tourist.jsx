import { useState } from "react";
import Card from "./Card"
import data1 from "./data"
import { MdOutlineTravelExplore } from "react-icons/md";

function Tourist(){
   const [tours,setTour]=useState(data1)
   const [show,setShow]=useState(false)

   function refresh(){
    setTour(data1)
   }
   function remove(id){
    const newtours=tours.filter((tour)=>tour.id!==id)
if(newtours.length===0){
setShow(true)
}
    
    setTour(newtours)
    
   }
    return(
        <>
        <div className=" py-5">

            <div className="flex justify-center items-center gap-2">
 <h1 className=" text-center text-3xl">Tourist places by Shubham </h1>
 {<MdOutlineTravelExplore className="text-4xl text-orange-600"/>}
</div>
        <div className=" text-white flex justify-center items-center gap-6 flex-wrap">

               {
            tours.map((tour)=>{
                return(
                    <>
                  <Card  key={tour.id} {...tour} remove={remove} />
                  
                   
                     </>
                )
                   
                    
                
            })
        }

        </div>

        {
            show && 
           <div  className="flex m-auto mt-40 flex-col items-center justify-center gap-3">
            <span>Refresh to view Places</span>
        <button className="bg-red-600 w-max px-2 py-2 rounded-lg" onClick={refresh}>Refresh</button>
        </div>}
        </div>
       
     
        
        
        
        </>
    )
}
export default Tourist