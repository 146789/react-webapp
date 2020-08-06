import React, { useState } from "react";

function HooksExample() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count - {count}</h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default HooksExample;
