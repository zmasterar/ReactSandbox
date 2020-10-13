import React from "react";
import "./assets/main.css";
// import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import Mostrar from "./components/Mostrar";
import InputName from "./components/InputName";
import FectchExample from "./components/FecthExample";

function App() {
  return (
    <>
      <InputName />
      <FunctionalCounter />
      <FectchExample />
      <Mostrar />
    </>
  );
}

export default App;
