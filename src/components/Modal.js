import React from "react";
import Ocupations from "./Ocupations";

const Modal = (props) => {
  return (
    <div>
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        {/* overlay */}
        <div
          onClick={props.close}
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        ></div>

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="modal-header flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Datos</p>
              <div
                onClick={props.close}
                className="modal-close cursor-pointer z-50"
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            {props.data.name && (
              <p className="text-2xl text-blue-500">
                Nombre: <span className="text-blue-800">{props.data.name}</span>
              </p>
            )}
            {props.data.lastName && (
              <p className="text-2xl text-blue-500">
                Apelllido:{" "}
                <span className="text-blue-800">{props.data.lastName}</span>
              </p>
            )}
            {props.data.email && (
              <p className="text-2xl text-blue-500">
                email: <span className="text-blue-800">{props.data.email}</span>
              </p>
            )}
            {props.data.age && (
              <p className="text-2xl text-blue-500">
                Edad: <span className="text-blue-800">{props.data.age}</span>
              </p>
            )}

            {props.loading ? (
              <div className="text-3xl text-blue-500 pt-3">Cargando...</div>
            ) : (
              <Ocupations ocupationData={props.ocupationData} />
            )}

            <div className="modal-footer flex justify-end pt-2">
              <button
                onClick={props.close}
                className="font-bold py-1 m-4 h-16 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
