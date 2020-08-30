import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      <h1>Hook Mouse</h1>
      <h2>X: {x}</h2>
      <h2>Y: {y}</h2>
    </div>
  );
};

export default HookMouse;
