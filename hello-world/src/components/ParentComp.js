import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shubham",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "shubham" });
    }, 2000);
  }

  render() {
    console.log("ParentComp render");
    return (
      <div>
        <h1>Parent Component</h1>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
