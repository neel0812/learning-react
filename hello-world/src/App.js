import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Shubham" color="black">
        Children
      </Greet>
      <Greet name="John" color="blue">
        <button>Child button</button>
      </Greet>
      <Greet name="Drew" color="green" />
      <Welcome name="Shubham" color="black">
        {" "}
        Children
      </Welcome>
      <Welcome name="John" color="blue">
        <button>Child button</button>
      </Welcome>
      <Welcome name="Drew" color="green" />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
