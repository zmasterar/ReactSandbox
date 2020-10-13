import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-400 border-4 border-blue-700 shadow-lg rounded my-5 p-5 text-blue-800 flex flex-col text-center font-bold">
      <h1 className="text-3xl text-white">Count</h1>
      <h1 className="text-3xl text-white">{count}</h1>
      <span>
        <button
          className="font-bold py-2 m-1 h-16 w-16 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="font-bold py-2 m-1 h-16 w-16 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </span>
      <span>
        <button
          className="font-bold py-2 m-1 h-16 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </span>
    </div>
  );
}
export default FunctionalCounter;
