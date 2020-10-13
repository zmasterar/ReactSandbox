import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={funtionalCounterStyle}>
      <h1>Count</h1>
      <h1>{count}</h1>
      <span>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          +
        </button>
      </span>
      <span>
        <button
          style={{ ...buttonStyle, width: "" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </span>
    </div>
  );
}
export default FunctionalCounter;

const funtionalCounterStyle = {
  borderTop: "#444 solid 3px",
  borderBottom: "#444 solid 3px",
  margin: "10px 0px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const buttonStyle = {
  padding: "20px",
  fontSize: "large",
  width: "4em",
  margin: "2px",
};
