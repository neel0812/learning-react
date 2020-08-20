import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shubham",
    };

    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("LifecycleB getDerivedStatefromProps");

    return null; // return new state or null
  };

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("LifecycleB shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");

    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    );
  }
}

export default LifecycleB;
