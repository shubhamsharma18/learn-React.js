export default function Popup({setPopup,popup}){
    return(
    <>
     <div className='border-2 py-3 px-3 text-white border-white rounded-3xl absolute top-1/2 left-1/2 bg-black/90 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2'>
<h1 className="text-center  text-xl mb-3">This is Popup</h1>
<p  className="text-center">Finaly i made this popup using Conditional rendering</p>
<button  onClick={()=>{
setPopup(false)
}}  class="text-red-500 text-xl block mx-auto mt-40">
  ❌ Close
</button>

   </div>
    </>
)
}