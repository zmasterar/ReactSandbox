import React, { useState } from "react";

export default function Input() {
  const [name, setName] = useState("Benja");
  return (
    <>
      <h1>{name}</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => (e.target.value = name)}
      />
    </>
  );
}
