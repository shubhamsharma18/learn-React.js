import { useState } from "react"
import data1 from "./data"

function Card({id,name,price,desc,img,remove}){


    function trimfun(desc,limit){
        const words=desc.split(" ")
        if(words.length<=limit) return desc
        else{
            return words.slice(0,limit).join(" ")+"..... "
        }
        
    }
function readmore(){
    setshowfull(!showfull)
}


    const [showfull ,setshowfull]=useState(false)
    return (
    <>
    <div className="bg-pink-900  w-[400px] object-cover flex mt-5 flex-col justify-between rounded-2xl">

        <div  className=" h-[250px] w-full overflow-hidden">
            <img  className="h-full w-full object-cover  object-center rounded-t-2xl" src={img} alt="no" />
        </div>

        <div className="px-2 py-2 flex flex-col gap-2">
                 <div className="text-bold">
            {name}
        </div>
        <div>
             {price}
        </div>

        <div>
   {showfull? desc:trimfun(desc,30)}
   <span className="text-blue-300 cursor-pointer" onClick={readmore}>{showfull? "Show less":"Read more"}</span>
        </div>
        

<button  onClick={()=>remove(id)} className="border-none rounded-2xl w-full px-2 py-2 mb-4 bg-blue-500 text-white">
    Not interested
</button>
        </div>
   


    </div>
    
    
    
    </>
    )
}
export default Card