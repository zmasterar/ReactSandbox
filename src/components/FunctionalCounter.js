import React, { useState, useEffect } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Benja");
  useEffect(() => console.log("asd"));
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => (e.target.value = name)}
      />
      <h1>Clickeaste {count} veces</h1>
      <button onClick={() => setCount(count + 1)}>Clickeame</button>
    </div>
  );
}
export default FunctionalCounter;
