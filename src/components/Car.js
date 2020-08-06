import React, { Component } from "react";

export class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "benz",
      model: "q7",
      color: "red",
      year: 2020,
    };
  }
  colorChange() {
    this.setState({
      color: "blue",
    });
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          in year {this.state.year}
        </p>
        <button type="button" onClick={() => this.colorChange()}>
          click here
        </button>
      </div>
    );
  }
}

export default Car;
