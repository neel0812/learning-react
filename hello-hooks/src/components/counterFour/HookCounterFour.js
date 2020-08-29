import React, { useState } from "react";

const HookCounterFour = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h1>Counter 4</h1>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li id={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFour;
