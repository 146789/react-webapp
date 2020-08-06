import React from "react";
import "./App.css";
import Mobile from "./components/Mobile";
import Home from "./components/Home";
import Details from "./components/Details";

import { BrowserRouter, Route } from "react-router-dom";
import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Mobile} />
      <Route exact path="/details" component={Details} />
      {/* <HooksExample /> */}
      {/* <EventBind /> */}
      {/* <Car />
      <Name />
      <Counter12 />
      {/* <Counter></Counter>
      <Message /> */}
      {/* <Greet />
      <Welcome /> */}
      {/* <Greet name="Mahesh" />
      <Greet name="Venky" />
      <Greet name="Reddy" /> */}
    </div>
  );
}

export default App;
