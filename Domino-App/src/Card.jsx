import { useState } from "react";

function Card({ id, title, price, src, Remove, Add, cart, toggleCheese }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [extraToppings, setExtraToppings] = useState(false);

  const sizePrices = { Small: 0, Medium: 50, Large: 100 };
  const toppingPrice = 30;

  // Variant ke hisaab se unique ID aur total price
  const currentVariantId = `${id}-${selectedSize}-${extraToppings}`;
  const totalPrice = Number(price) + sizePrices[selectedSize] + (extraToppings ? toppingPrice : 0);

  // Check if this specific variant is in cart
  const itemInCart = cart.find((item) => item.uniqueId === currentVariantId);
  const isSelected = itemInCart?.qty > 0;

  const handleFinalAdd = () => {
    const customTitle = `${title} (${selectedSize}${extraToppings ? " + Toppings" : ""})`;
    // Add function ko uniqueId pass kar rahe hain
    Add(id, customTitle, totalPrice, currentVariantId);
    setIsModalOpen(false);
  };

  return (
    <div style={{ border: isSelected ? "2px solid #00FF00" : "1px solid #ddd", padding: "10px", width: "230px", borderRadius: "12px", backgroundColor: "white" }}>
      <img src={src} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} alt={title} />
      <h3>{title}</h3>
      <p>Price: ₹{totalPrice}</p>
      
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => setIsModalOpen(true)} style={{ flex: 1, backgroundColor: "#00FF00", padding: "8px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
Add to Cart
        </button>
        {isSelected && (
          <button onClick={() => Remove(currentVariantId)} style={{ backgroundColor: "#ef4444", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}>
            -
          </button>
        )}
      </div>

      {/* Modal logic remains same as your previous code, calling handleFinalAdd on Confirm */}
      {isModalOpen && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.4)", // Thoda light aur blur background
      backdropFilter: "blur(8px)", // Background blur effect
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10000,
      animation: "fadeIn 0.3s ease-out", // Smooth entry
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "24px", // Extra rounded corners
        width: "320px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)", // Deep shadow for depth
        position: "relative",
        border: "1px solid #f0f0f0",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "20px", color: "#1f2937", textAlign: "left" }}>
        Customize ✨
      </h2>

      {/* Size Options */}
      <p style={{ fontSize: "14px", fontWeight: "600", color: "#6b7280", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
        Select Size
      </p>
      <div style={{ marginBottom: "24px" }}>
        {Object.keys(sizePrices).map((size) => (
          <label
            key={size}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "8px 0",
              padding: "12px 15px",
              borderRadius: "12px",
              backgroundColor: selectedSize === size ? "#f0fdf4" : "#f9fafb",
              border: selectedSize === size ? "2px solid #22c55e" : "2px solid #f3f4f6",
              cursor: "pointer",
              transition: "0.2s all ease",
            }}
          >
            <input
              type="radio"
              name={`size-${id}`}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
              style={{ accentColor: "#22c55e", width: "18px", height: "18px", marginRight: "12px" }}
            />
            <span style={{ fontSize: "15px", fontWeight: selectedSize === size ? "700" : "500", color: "#374151" }}>
              {size} <span style={{ color: "#10b981", fontSize: "13px" }}>{sizePrices[size] > 0 ? `(+₹${sizePrices[size]})` : ""}</span>
            </span>
          </label>
        ))}
      </div>

      {/* Extra Toppings Section */}
      <div
        style={{
          backgroundColor: "#fefce8",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "25px",
          border: "1px dashed #facc15",
        }}
      >
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={extraToppings}
            onChange={() => setExtraToppings(!extraToppings)}
            style={{ accentColor: "#ca8a04", width: "18px", height: "18px", marginRight: "12px" }}
          />
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#854d0e" }}>
            Add Extra Toppings (+₹30) 🧀
          </span>
        </label>
      </div>

      {/* Total Price & Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button
          onClick={handleFinalAdd}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
            transition: "transform 0.2s",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Add to Cart • ₹{totalPrice}
        </button>

        <button
          onClick={() => setIsModalOpen(false)}
          style={{
            width: "100%",
            padding: "10px",
            background: "none",
            border: "none",
            color: "#9ca3af",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Maybe Later
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
export default Card;