import React from 'react';

function ViewCart({ cart, onClose, Remove }) {
  const totalBill = cart.reduce((sum, item) => sum + (item.price * item.qty) + (item.cheese ? 20 * item.qty : 0), 0);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(6px)", // Smooth background blur
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000,
      transition: "0.3s ease-in-out"
    }}>
      <div style={{
        backgroundColor: "#fff",
        width: "380px",
        maxHeight: "85vh",
        padding: "0",
        borderRadius: "24px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        
        {/* --- Header Section --- */}
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid #f3f4f6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff"
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#111" }}>My Cart</h2>
            <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>{cart.length} items added</p>
          </div>
          <button 
            onClick={onClose} 
            style={{ 
              border: "none", 
              background: "#f3f4f6", 
              fontSize: "14px", 
              cursor: "pointer", 
              width: "32px", 
              height: "32px", 
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#374151"
            }}>✕</button>
        </div>

        {/* --- Items List --- */}
        <div style={{
          padding: "10px 24px",
          overflowY: "auto",
          flex: 1,
          backgroundColor: "#fafafa"
        }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
               <span style={{ fontSize: "50px" }}>🛒</span>
               <p style={{ color: "#9ca3af", fontWeight: "500" }}>Your cart is feeling light!</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.uniqueId} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                borderBottom: "1px solid #eee"
              }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 4px 0", fontSize: "15px", fontWeight: "600", color: "#374151" }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>
                    ₹{item.price} {item.cheese && " + Extra Cheese"}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    padding: "2px"
                  }}>
                    <button 
                      onClick={() => Remove(item.uniqueId)} 
                      style={{ 
                        background: "none", 
                        border: "none", 
                        color: "#ef4444", 
                        padding: "4px 10px", 
                        cursor: "pointer",
                        fontWeight: "bold" 
                      }}>-</button>
                    <span style={{ fontSize: "14px", fontWeight: "700", minWidth: "20px", textAlign: "center" }}>{item.qty}</span>
                    {/* Add Button logic can be added here too if needed */}
                  </div>
                  <strong style={{ fontSize: "14px", color: "#111", minWidth: "50px", textAlign: "right" }}>
                    ₹{(item.price * item.qty) + (item.cheese ? 20 * item.qty : 0)}
                  </strong>
                </div>
              </div>
            ))
          )}
        </div>

        {/* --- Bill Summary Footer --- */}
        {cart.length > 0 && (
          <div style={{
            padding: "24px",
            backgroundColor: "#fff",
            borderTop: "1px solid #f3f4f6"
          }}>
            <div style={{ marginBottom: "16px" }}>
               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
                  <span>Item Total</span>
                  <span>₹{totalBill}</span>
               </div>
               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
                  <span>Delivery Fee</span>
                  <span style={{ color: "#10b981" }}>FREE</span>
               </div>
               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "800", color: "#111", marginTop: "12px" }}>
                  <span>Total Bill</span>
                  <span>₹{totalBill}</span>
               </div>
            </div>

            <button style={{
              width: "100%",
              padding: "16px",
              borderRadius: "14px",
              border: "none",
              backgroundColor: "#22c55e",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              boxShadow: "0 10px 20px rgba(34, 197, 94, 0.2)",
              transition: "0.2s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#16a34a"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#22c55e"}
            onClick={()=>alert("Order placed")}
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewCart;