import React, { useEffect, useState } from "react";
import ListResources from "./ListResources";

export default function FectchExample() {
  const url = "https://jsonplaceholder.typicode.com";
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!type) return;

    setLoading(true);
    fetch(`${url}/${type}?_limit=10`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [type]);

  return (
    <div className="bg-blue-400 border-4 border-blue-700 shadow-lg rounded my-5 p-5 text-blue-800 flex flex-col text-center font-bold">
      <div className="flex justify-center">
        <button
          className="font-bold py-2 m-1 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 text-2xl"
          onClick={() => setType("users")}
        >
          Users
        </button>
        <button
          className="font-bold py-2 m-1 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 text-2xl"
          onClick={() => setType("posts")}
        >
          posts
        </button>
        <button
          className="font-bold py-2 m-1 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 text-2xl"
          onClick={() => setType("photos")}
        >
          photos
        </button>
        <button
          className="font-bold py-2 m-1 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 text-2xl"
          onClick={() => setType(null)}
        >
          Limpiar
        </button>
      </div>
      {type ? (
        <ListResources type={type} data={data} loading={loading} />
      ) : null}
    </div>
  );
}
