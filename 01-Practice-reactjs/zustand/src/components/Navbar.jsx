import mystore from "../zustand"

function Navbar(){
    const myhook=mystore()
    // console.log(myhook);
    
    function increment(){
       myhook.inc()
    }
     function capital(){
       myhook.capital()
    }
    return(
        <>
        <h3>{myhook.name}</h3>
        <h3>{myhook.count}</h3>
        <button onClick={increment}>Click me</button>
        <button onClick={capital}>Capiatal button</button>
        
        </>
    )
}
export default Navbar