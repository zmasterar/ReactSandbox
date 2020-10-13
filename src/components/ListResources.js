import React from "react";
export default function ListResources(props) {
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>{props.type}</h1>
      {props.data.map((item) => (
        <ul>
          <li key={item.id}>
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
    </>
  );
}
