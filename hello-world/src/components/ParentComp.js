import React, { Component } from "react";
import MemoComp from "./MemoComp";

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
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
