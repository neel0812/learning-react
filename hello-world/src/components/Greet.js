import React from "react";

const Greet = ({ color, name, children }) => {
  return (
    <div>
      <h1 style={{ color: color }}>Hello {name}</h1>
      {children}
    </div>
  );
};

export default Greet;
