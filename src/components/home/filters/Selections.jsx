import React, { useRef } from "react";
import useDesSeleccionar from "../../../hooks/filters/useDesSeleccionar";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const Selections = () => {
  const myRef = useRef();
  const arrSelecciones = useSelector((state) => state.filters);
  const { desSelecionar } = useDesSeleccionar();

  return (
    <CSSTransition
      in={arrSelecciones.length !== 0}
      timeout={300}
      classNames="expand"
      unmountOnExit
    >
      <div className="filter__selections" ref={myRef}>
        {arrSelecciones.map((select, i) => (
          <div
            key={i}
            onClick={() => desSelecionar(select)}
            className="filter__selections--item"
          >
            <p>{select}</p>
            <i className="fa-solid fa-circle-minus"></i>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default Selections;
