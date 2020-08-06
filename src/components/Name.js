import React, { Component } from "react";

export class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "naveen",
    };
  }
  changeName() {
    this.setState({
      name: "Mahesh",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>click here</button>
      </div>
    );
  }
}

export default Name;
