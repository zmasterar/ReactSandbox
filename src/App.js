import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import Mostrar from "./components/Mostrar";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <>
      <Input />
      <ClassCounter />
      <FunctionalCounter />
      <Mostrar />
    </>
  );
}

export default App;
