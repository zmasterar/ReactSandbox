import React, { useState } from "react";

export default function InputName() {
  const [name, setName] = useState("");

  return (
    <div style={inputNameStyle}>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onFocus={(e) => (e.target.value = name)}
        placeholder="Ingrese su nombre"
        style={inputFieldStyle}
      />
      <h1>Su nombre es {name}</h1>
    </div>
  );
}

//Styles
const inputNameStyle = {
  borderTop: "#444 solid 3px",
  borderBottom: "#444 solid 3px",
  margin: "10px 0px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};
const inputFieldStyle = {
  textAlign: "center",
  padding: "1.5rem",
  fontSize: "200%",
  fontWeight: "bold",
};
