import React, { useState, useEffect } from "react";

function MouseColor() {
  const [color, setColor] = useState("teal");

  function onMouseMove(event) {
    if (event.clientX < window.innerWidth / 2) {
      setColor("teal");
    } else {
      setColor("red");
    }
  }

  //se ejecuta cada vez que el obj hace render:
  useEffect(() => {
    //ejecutar getEventListener(window)
    window.addEventListener("mousemove", onMouseMove);
    console.log("ejecutando");
    return () => {
      console.log("Limpiando");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  console.log("Ocurrio el render");
  return (
    <div
      className={"rounded-lg shadow-lg h-48 mt-4 bg-" + color + "-500"}
    ></div>
  );
}

export default MouseColor;
