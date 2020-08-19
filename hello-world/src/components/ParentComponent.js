import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
      temp: "temp",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);

    // We can also change the state of parent component from child component.
    this.setState({ temp: "new" }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
