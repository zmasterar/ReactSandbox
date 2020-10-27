import React from "react";
const Ocupations = ({ ocupationData }) => {
  let ocupationTitles = [];
  for (let title in ocupationData.titles) {
    ocupationTitles.push(title);
  }

  return (
    <ul className="pt-3">
      <div className="text-3xl text-blue-500 pt-3">Ocupaciones</div>
      {ocupationTitles.map((title) => (
        <li>
          <h3 className="text-blue-500 text-2xl capitalize font-bold">
            {title}
          </h3>
          <ul className="pt-1">
            {ocupationData.titles[title].sources.map((source) => (
              <li className="text-blue-800">{source}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Ocupations;
