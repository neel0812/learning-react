import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  //   clickHandler() {
  //     this.setState({ message: "Good Bye" });
  //   }

  clickHandler = () => {
    this.setState({ message: "Good Bye" });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
