import React, { useState } from "react";

export default function InputName() {
  const [name, setName] = useState("");

  return (
    <div className="bg-blue-400 border-4 border-blue-700 shadow-lg rounded my-5 p-5 text-3xl text-blue-800 flex flex-col text-center font-bold">
      <input
        className="text-center text-blue-800 shadow-lg p-3 mb-2 rounded-full font-bold max-w-xl mx-auto"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onFocus={(e) => (e.target.value = name)}
        placeholder="Ingrese su nombre"
      />
      {name && (
        <h1 className="text-white">
          Su nombre es <span className="text-blue-800">{name}</span>
        </h1>
      )}
    </div>
  );
}
