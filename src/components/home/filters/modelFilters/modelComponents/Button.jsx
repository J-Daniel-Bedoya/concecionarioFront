import React from "react";
import { useDispatch } from "react-redux";
import { setDespliegues } from "../../../../../store/slices/despliegues.slice";

const Button = ({ tipo, name, despliegue }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setDespliegues(tipo))}
      className="buttons"
      style={{
        color: despliegue && "#",
      }}
    >
      {name}{" "}
      {despliegue ? (
        <i className="fa-solid fa-caret-up"></i>
      ) : (
        <i className="fa-solid fa-caret-down"></i>
      )}
    </div>
  );
};

export default Button;
