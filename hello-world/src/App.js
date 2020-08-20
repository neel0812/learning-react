import React from "react";
import LifecycleA from "./components/LifecycleA";
// import StyleSheets from "./components/StyleSheets";
// import Inline from "./components/Inline";
// import Form from "./components/Form";
// import NameList from "./components/NameList";
// import UserGreeting from "./components/UserGreeting";
// import ParentComponent from "./components/ParentComponent";
// import EventBind from "./components/EventBind";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";

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

      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <StyleSheets />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form /> */}

      <LifecycleA />
    </div>
  );
}

export default App;

/*

Lifecycle Methods

- Mounting
  - When an instance of a component is created and inserted into the DOM.
  - constructor
  - static getDerivedStateFromProps
  - render
  - componentDidMount

- Updating
  - When a component is being rerendered as a result of changes to either its props or state.
  - static getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate

- Unmounting
  - When a component is being removed from the DOM.
  - componentWillUnmount

- Error Handling
  - When there is an error during rerendering in a lifecycle method, or in the constructor or in any child component.
  - static getDerivedStateFromError
  - componentDidCatch

- Methods in detail
  - constructor(props)
    - A special function that will get called whenever a new component is created.
    - DOs
      - Initialize state
      - Bind event handlers
    - DON'Ts
      - Make http requests
    - Note
      - Call super(props)
      - Overwrite state

  - static getDerivedStateFromProps(props, state)
    - This method is called everytime when a component rerenders
    - DOs
      - Set the state
    - DON'Ts
      - Make http requests

  - render()
    - Required method
    - DOs
      - Based on props and state, return jsx.
    - DON'Ts
      - Change state, change DOM element, make http calls.
    - Note
      - After render method, children component's render method is also called.

  - componentDidMount()
    - This method is called only once in entire lifecycle. This method is called immediately after component and all its children components are rendered.
    - DOs
      - Interact with DOM
      - Make http calls

  - shouldComponentUpdate(nextProps, nextState)
    - Dictates if the component should rerender or not.
    - DOs
      - Performance Optimization (by not rerendering the component)
    - DON'Ts
      - Make http calls
      - call setState method

  - getSnapshotBeforeUpdate(prevProps, prevState)
    - Called before the changes in virtual DOM are reflcated in the DOM
    - DOs
      - Capture information from the DOM

  - componentDidUpdate(prevProps, prevState, snapshot)
    - This method is called when render is finished in rerender cycles
    - DOs
      - Make http calls



*/
