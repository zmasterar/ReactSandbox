import React, { useState, useEffect } from "react";

function MouseColor() {
  const [color, setColor] = useState("teal");
  //se ejecuta cada vez que el obj hace render:
  useEffect(() => {
    function onMouseMove(event) {
      if (event.clientX < window.innerWidth / 2) {
        setColor("orange");
      } else {
        setColor("teal");
      }
    }
    //ejecutar getEventListener(window)
    window.addEventListener("mousemove", onMouseMove);
    console.log("ejecutando");
    return () => {
      console.log("Limpiando");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  console.log("Ocurrio el render");
  return <div style={{ height: "200px", background: color }}></div>;
}

export default MouseColor;
