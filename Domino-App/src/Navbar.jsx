// import ViewCart from "./ViewCart"

function Navbar({count,cart,bill,onViewCart}){
    return(
        <>
        <div style={{ display:"flex",padding:"6px",gap:"7px",backgroundColor:"#ADD8E6",justifyContent:"center",alignItems:"center"}}>
            <button style={{backgroundColor:"orange"}}>Cart items Selected: {count}</button>

        <button onClick={onViewCart}>
        View Cart
      </button>
            <h3>Bill : {bill} Rs</h3>

        </div>
        
        </>
    )
    
}
export default Navbar