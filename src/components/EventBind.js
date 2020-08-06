import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello naveen",
    };
    // this.ClickHandler = this.ClickHandler.bind(this);
  }
  //   ClickHandler() {
  //     this.setState({
  //       message: "hello mahesh",
  //     });
  //     console.log(this);
  //   }
  ClickHandler = () => {
    this.setState({
      message: "good bye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.ClickHandler()}>Click</button> */}
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
