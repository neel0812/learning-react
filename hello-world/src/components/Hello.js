import React from "react";

const Hello = () => {
  //   return (
  //     <div id="Hello">
  //       <h1>Hello Shubham</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "Hello" },
    React.createElement("h1", null, "Hello Shubham"),
  );
};

export default Hello;
