import React, { useState } from "react";
import MouseColor from "./MouseColor";

function Mostrar() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="bg-blue-400 border-4 border-blue-700 shadow-lg rounded my-5 p-5 text-blue-800 text-center font-bold">
      <button
        onClick={() => setMostrar(!mostrar)}
        className="font-bold py-2 m-1 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 text-2xl"
      >
        Mostrar/Ocultar
      </button>
      {mostrar ? <MouseColor /> : null}
    </div>
  );
}

export default Mostrar;
