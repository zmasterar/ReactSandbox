import React, { useState } from "react";
const url =
  "https://namespy-api-mu7u3ykctq-lz.a.run.app/v1/job_title?country_code=ar&filter_input=1&use_proxy=1&collected_data=1&input=";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    age: "",
  });
  const [ocupationData, setOcupationData] = useState({});

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const sendData = (event) => {
    event.preventDefault();
    fetch(`${url}${data.name}+${data.lastName}`)
      .then((res) => res.json())
      .then((json) => {
        setOcupationData(json);
      });
  };
  return (
    <div className="bg-blue-400 border-4 border-blue-700 shadow-lg rounded my-5 p-5 text-blue-800 flex flex-col text-center font-bold">
      <h1 className="text-3xl text-white text-center">Formulario de alumno:</h1>
      <form className="flex flex-col flex-grow text-3xl" onSubmit={sendData}>
        <input
          className="text-center text-blue-800 shadow-lg p-3 mb-2 rounded-full font-bold"
          placeholder="Ingrese el nombre"
          name="name"
          onChange={handleChange}
        ></input>
        <input
          className="text-center text-blue-800 shadow-lg p-3 mb-2 rounded-full font-bold"
          placeholder="Ingrese el apellido"
          name="lastName"
          onChange={handleChange}
        ></input>
        <input
          className="text-center text-blue-800 shadow-lg p-3 mb-2 rounded-full font-bold"
          type="email"
          placeholder="Ingrese el email"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          className="text-center text-blue-800 shadow-lg p-3 mb-2 rounded-full font-bold"
          type="number"
          placeholder="Ingrese la edad"
          name="age"
          onChange={handleChange}
        ></input>
        <h1 className="text-3xl text-white text-center">Los datos son:</h1>
        <p className="text-2xl text-white">
          Nombre: <span className="text-blue-800">{data.name}</span>
        </p>
        <p className="text-2xl text-white">
          Apellido: <span className="text-blue-800">{data.lastName}</span>
        </p>
        <p className="text-2xl text-white">
          email: <span className="text-blue-800">{data.email}</span>
        </p>
        <p className="text-2xl text-white">
          Edad: <span className="text-blue-800">{data.age}</span>
        </p>

        <button
          className="font-bold py-2 m-4 h-16 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <ul>
        {ocupationData.titles ? JSON.stringify(ocupationData.titles) : null}
      </ul>
      <div />
    </div>
  );
};

export default Form;
