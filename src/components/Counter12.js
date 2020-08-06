import React, { Component } from "react";

export class Counter12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div>
        <h3>Count - {this.state.count}</h3>
        <button style={{ margin: 20 }} onClick={() => this.increment()}>
          increment
        </button>
        <button style={{ margin: 20 }} onClick={() => this.decrement()}>
          decrement
        </button>
        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default Counter12;
