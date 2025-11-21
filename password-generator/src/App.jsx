import { useState, useCallback } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // -----------------------------
  // PASSWORD GENERATE FUNCTION
  // -----------------------------
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*?";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex]; // add each char
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // -----------------------------
  // COPY PASSWORD
  // -----------------------------
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator</h2>

      {/* PASSWORD FIELD + COPY BUTTON */}
      <div style={styles.passwordBox}>
        <input
          type="text"
          value={password}
          placeholder="Your Password"
          readOnly
          style={styles.input}
        />
        <button onClick={copyPassword} style={styles.button}>
          Copy
        </button>
      </div>

      {/* RANGE SLIDER */}
      <div style={styles.settings}>
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* NUMBER CHECKBOX */}
      <div style={styles.settings}>
        <label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          Include Numbers (0–9)
        </label>
      </div>

      {/* SPECIAL CHARACTER CHECKBOX */}
      <div style={styles.settings}>
        <label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          Include Special Characters (!@#$%)
        </label>
      </div>

      {/* GENERATE BUTTON */}
      <button onClick={generatePassword} style={styles.generateBtn}>
        Generate Password
      </button>
    </div>
  );
}

// ----------------------------------
// INLINE CSS
// ----------------------------------
const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
    textAlign: "center",
  },
  passwordBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  button: {
    padding: "10px 14px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  settings: {
    marginBottom: "12px",
    textAlign: "left",
  },
  generateBtn: {
    width: "100%",
    padding: "12px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "15px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;
