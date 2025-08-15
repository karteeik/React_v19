import React, { useState } from "react";

export default function BadKeysExample() {
  const [items, setItems] = useState(["A", "B", "C"]);

  const addItem = () => {
    const newItem = prompt("Enter new item:");
    if (newItem) {
      setItems([newItem, ...items]); // Add to top
    }
  };

  return (
    <div>
      <h2>❌ Using Index as Key</h2>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <input
          key={index} // ❌ Problem: Not stable if list order changes
          defaultValue={item}
        />
      ))}
    </div>
  );
}
