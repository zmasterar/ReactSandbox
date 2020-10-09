import React, { useState } from "react";
import MouseColor from "./MouseColor";

function Mostrar() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
      {mostrar ? <MouseColor /> : null}
    </div>
  );
}

export default Mostrar;
