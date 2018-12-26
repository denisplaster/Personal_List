import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h1>hello from React</h1>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
