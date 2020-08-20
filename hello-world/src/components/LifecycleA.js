import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shubham",
    };

    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("LifecycleA getDerivedStatefromProps");

    return null; // return new state or null
  };

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <h1>LifecycleA</h1>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
