import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  increment() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("logging from callback function", this.state.count);
    // });

    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });

    console.log("regular logging", this.state.count);
  }

  render() {
    return (
      <div>
        count: {this.state.count}
        <br />
        <button onClick={() => this.incrementFive()}>Add</button>
      </div>
    );
  }
}

export default Counter;
