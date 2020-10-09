import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import Mostrar from "./components/Mostrar";
import "./App.css";

function App() {
  return (
    <>
      <ClassCounter />
      <FunctionalCounter />
      <Mostrar />
    </>
  );
}

export default App;
