import React from "react";

const Register = ({ deploy }) => {
  return (
    <button
      onClick={() => deploy("register")}
      className="buttons__register"
      variant="outline-success"
    >
      <i className="fa-solid fa-circle-plus"></i>
      <span>Nuevo Producto</span>
    </button>
  );
};
const Profile = ({ deploy, isBlock }) => {
  return (
    <button className="buttons__cuenta" onClick={() => deploy("profile")}>
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
