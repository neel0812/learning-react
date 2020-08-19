import React from "react";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Shubham" color="black">
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
      <Welcome name="Drew" color="green" /> */}

      {/* <Hello /> */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <Greet name="Drew" color="green" />
      <Welcome name="Drew" color="green" /> */}

      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
