import React from "react";

const Register = ({ deploy }) => {
  return (
    <button
      onClick={() => deploy("register")}
      className="buttons__content"
      // variant="outline-success"
    >
      <div>
        <i className="fa-solid fa-circle-plus"></i>
        <span>Nuevo Producto</span>
      </div>
    </button>
  );
};
const Profile = ({ deploy, isBlock }) => {
  return (
    <button
      className="buttons__content cuenta"
      onClick={() => deploy("profile")}
    >
      {!isBlock ? (
        <i className="fa-solid fa-user"></i>
      ) : (
        <div>
          <i className="fa-solid fa-user"></i>
          <span>Perfil</span>
        </div>
      )}
    </button>
  );
};

export { Register, Profile };
