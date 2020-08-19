import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // if-else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shubham</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // ...
    // using variable...
    // let message = "";
    // if (this.state.isLoggedIn) message = "Welcome Shubham";
    // else message = "Welcome Guest";
    // return <div>{message}</div>;
    // ...
    // Condition is jsx
    // return (
    //   <div>
    //     this.state.isLoggedIn ? (<div>Welcome Shubham</div>) : (
    //     <div>Welcome Guest</div>)
    //   </div>
    // );
    // ...
    // ShortCircuit Method
    return (
      <div>
        {this.state.isLoggedIn && <div>Welcome Shubham</div>}
        {!this.state.isLoggedIn && <div>Welcome Guest</div>}
      </div>
    );
  }
}

export default UserGreeting;
