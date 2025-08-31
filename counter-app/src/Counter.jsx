import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  const [customValue, setCustomValue] = useState("");

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const setCustom = () => {
    if (!isNaN(customValue) && customValue !== "") {
      setCount(Number(customValue));
      setCustomValue("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚡ Counter App</h1>
      <p style={styles.count}>{count}</p>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={increment}>+ Increment</button>
        <button style={styles.button} onClick={decrement}>- Decrement</button>
        <button style={styles.reset} onClick={reset}>Reset</button>
      </div>

      <div style={styles.customContainer}>
        <input
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          placeholder="Enter custom value"
          style={styles.input}
        />
        <button style={styles.button} onClick={setCustom}>Set</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f9",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  count: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
  reset: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#dc3545",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
  customContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
  },
};
