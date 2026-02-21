function ViewCart({ cart, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "350px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>🛒 Your Cart</h2>

        {cart.length === 0 && (
          <p style={{ textAlign: "center", color: "#777" }}>
            Cart is empty
          </p>
        )}

        {cart.map(item => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              paddingBottom: "10px",
              borderBottom: "1px solid #eee"
            }}
          >
            <div>
              <h4 style={{ margin: "0 0 4px 0" }}>
                {item.title}
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                Qty: {item.qty}
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <p style={{ margin: 0 }}>₹{item.price}</p>
              <strong> 
                {
                  item.cheese?item.price * item.qty + 20 * item.qty +" EC" :item.price * item.qty
                }
                
                
                </strong>
            </div>
          </div>
        ))}

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ViewCart;
