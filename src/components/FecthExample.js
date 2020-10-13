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
    <div>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("posts")}>posts</button>
      <button onClick={() => setType("photos")}>photos</button>

      <button onClick={() => setType(null)}>Limpiar</button>
      {type ? (
        <ListResources type={type} data={data} loading={loading} />
      ) : null}
    </div>
  );
}
