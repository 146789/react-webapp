import React from "react";
// function greet() {
//   return <h1>hello naveen</h1>;
// }
export const Greet = (props) => {
  console.log(props);
  return <h1>Hello {props.name}</h1>;
};

//export default greet;
