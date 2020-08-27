import React, { Component } from "react";
import ComponentF from "./ComponentF";
import { UserContext } from "./UserContext";

class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
        <p>Component E context {this.context}</p>
      </div>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
