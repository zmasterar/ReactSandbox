import React from "react";
export default function ListResources(props) {
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <hr className="border-t-2 border-blue-800 mt-6" />
      <h1 className="text-4xl">{props.type}</h1>
      {props.data.map((item) => (
        <ul>
          <li
            key={item.id}
            className="bg-blue-200 my-6 rounded-lg shadow-lg py-6 px-4"
          >
            {Object.keys(item).map((property, key) => (
              <ul>
                <li key={key}>
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
