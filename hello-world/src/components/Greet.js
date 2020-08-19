import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1 style={{ color: props.color }}>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};
export default Greet;
