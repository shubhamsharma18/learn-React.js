import { useState } from "react";

function Card({ id, title, price, src, Remove, Add,cart,toggleCheese}) {
   const itemInCart = cart.find(item => item.id === id);
  const isSelected = itemInCart?.qty > 0;

  const isCheese=itemInCart?.cheese
  console.log(isCheese);
  


  return (
    <div style={{
       border: isSelected ? "3px solid #00FF00" : "1px solid gray",
        padding: "8px",
        width: "220px",
        minHeight: "100px",
        overflow: "hidden",
        display:"flex",
        flexDirection:"column",
        gap:"1px",
       
        borderRadius: "8px",
      }}
    >
      <div style={{
        border: "1px solid gray",

        width: "220px",
        height: "150px",
        objectFit: "cover",
        

      }}>
        <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={src} alt="" srcset="" />
      </div>

   <button  onClick={()=>toggleCheese(id)} style={{ outline:"none", backgroundColor:isCheese ?"green":"black",color:"white"}}>Extra cheese 20Rs</button>
      <h3>{title}</h3>
      <p>₹{
      isCheese?price+"+"+"20":price
      }</p>
      <div>
        <button onClick={() => Add(id, title, price)} style={{ backgroundColor: "#00FF00" }}>Add to Cart</button>
        <button onClick={()=>Remove(id)} style={{ backgroundColor: "red", color: "white" }}>-</button>
      </div>

    </div>
  );
}

export default Card;
