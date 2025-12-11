import Card from "./Card"
import data1 from "./data"

function Tourist(){
    let data=data1
    return(
        <>
        <div className="bg-blue-200 py-5">
 <h1 className="text-center text-3xl">Tourist places by Shubham</h1>
        <div className=" text-white h-screen flex justify-center items-center gap-6 flex-wrap">

               {
            data.map((tour)=>{
                return(
                    <>
                  <Card key={tour.id} name={tour.name} price={tour.price} desc={tour.desc} imgsrc={tour.img}/>
                  
                   
                     </>
                )
                   
                    
                
            })
        }

        </div>

        </div>
       
     
        
        
        
        </>
    )
}
export default Tourist