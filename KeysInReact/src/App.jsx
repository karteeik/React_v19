import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
  ]);

  const addItem = () => {
    const newItem = prompt("Enter new item:");
    if (newItem) {
      setItems([{ id: Date.now(), text: newItem }, ...items]); // Unique id
    }
  };
  return (
    <>
      <h2>✅ Using Stable Keys</h2>
      <button onClick={addItem}>Add Item</button>
      {items.map((item) => (
        <input
          key={item.id} // ✅ Stable and unique
          defaultValue={item.text}
        />
      ))}
    </>
  );
}

export default App;
