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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("LifecycleA shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = (event) => {
    this.setState({ name: "SHUBHAM" });
  };

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <h1>LifecycleA</h1>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
