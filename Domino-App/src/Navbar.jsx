function Navbar({ count, cart, bill, onViewCart }) {
  
  // Bill ko number mein convert karna taaki calculation error na dikhe
  const finalBill = Number(bill).toLocaleString('en-IN'); 

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "10px 20px",
          gap: "15px",
          backgroundColor: "#ADD8E6",
          justifyContent: "space-between", // Logo left mein, buttons right mein
          alignItems: "center",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          position: "sticky", // Scroll karne par bhi top par rahega
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* App Logo/Name */}
        <div style={{ fontWeight: "bold", fontSize: "22px", color: "#333", fontFamily: "sans-serif" }}>
          🍕 FoodieApp
        </div>

        {/* Action Area */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          
          {/* Items Counter */}
          <button
            style={{
              backgroundColor: "orange",
              border: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              fontWeight: "bold",
              color: "white",
              fontSize: "14px"
            }}
          >
            Items: {count}
          </button>

          {/* View Cart Button */}
          <button
            onClick={onViewCart}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #333",
              padding: "8px 15px",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px",
              transition: "0.2s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#f0f0f0"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#fff"}
          >
            🛒 View Cart
          </button>

          {/* Final Bill */}
          <h3 style={{ margin: 0, color: "#333", fontSize: "18px", minWidth: "100px" }}>
            Bill: ₹{finalBill}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;