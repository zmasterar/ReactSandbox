import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function ListResources(props) {
  if (props.loading) {
    return <div className="text-white text-4xl">Loading...</div>;
  }
  return (
    <div>
      <hr className="border-t-2 border-blue-800 mt-6" />
      <h1 className="text-4xl text-white">{props.type}</h1>
      {props.data.map((item) => (
        <ul key={uuidv4()}>
          <li className="bg-white my-6 rounded-lg shadow-lg py-6 px-4">
            {Object.keys(item).map((property) => (
              <ul key={uuidv4()}>
                <li>
                  <strong>{property}</strong>: {JSON.stringify(item[property])}
                </li>
              </ul>
            ))}
          </li>
        </ul>
      ))}
    </div>
  );
}
