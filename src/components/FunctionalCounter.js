import React, { useState, useEffect } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("asd"));
  return (
    <div onClick={() => setCount(count + 1)}>
      <h1 style={{ cursor: "pointer" }}>Clickeaste {count} veces</h1>
    </div>
  );
}
export default FunctionalCounter;
