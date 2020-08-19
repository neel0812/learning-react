import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, color, children } = this.props;

    return (
      <div>
        <h1 style={{ color: color }}>Hello {name}</h1>
        {children}
      </div>
    );
  }
}

export default Welcome;
