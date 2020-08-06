import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: true,
    };
  }

  render() {
    return this.state.isloggedin && <div>Welcome naveen</div>;

    // return this.state.isloggedin ? (
    //   <div>welcome naveen</div>
    // ) : (
    //   <div>Welcome guest</div>
    // );
    // let message;
    // if (this.state.isloggedin) {
    //   message = <div>welcome naveen</div>;
    // } else {
    //   message = <div>welcome guest</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isloggedin) {
    //   return <div>Welcome naveen</div>;
    // } else {
    //   return <div>welcome guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Naveen</div>
    //     <div>Welcome guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
