import React from "react";
const Hello = () => {
  //with using jsx
  return (
    <div>
      <h1>Hello jsx naveen</h1>
    </div>
  );
  //without using jsx
  // return React.createElement(
  //   "div",
  //   { id: "hello", className: "dummyclass" },
  //   React.createElement("h1", null, "hello naveen without jsx")
  // );
};

export default Hello;
