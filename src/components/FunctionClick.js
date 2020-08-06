import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("buttonclick");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
