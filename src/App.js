import React from "react";
import FunctionalCounter from "./components/FunctionalCounter";
import Mostrar from "./components/Mostrar";
import InputName from "./components/InputName";
import FectchExample from "./components/FecthExample";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <InputName />
        <FunctionalCounter />
        <FectchExample />
        <Mostrar />
        <Form />
      </div>
    </div>
  );
}

export default App;
