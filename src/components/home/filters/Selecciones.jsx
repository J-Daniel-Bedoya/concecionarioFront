import React, { useRef } from "react";
import useChecksFiltros from "../hooks/useChecksFiltros";
import useDesSeleccionar from "../hooks/useDesSeleccionar";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const Selecciones = () => {
  const myRef = useRef();
  const arrSelecciones = useSelector((state) => state.filters);
  const { desSelecionar } = useDesSeleccionar();

  // console.log(arrSelecciones.length);

  return (
    <CSSTransition
      in={arrSelecciones.length !== 0}
      timeout={300}
      classNames="expand"
      unmountOnExit
      nodeRef={myRef}
    >
      <div className="filter__viewer" ref={myRef}>
        {arrSelecciones.map((select, i) => (
          <div
            key={i}
            onClick={() => desSelecionar(select)}
            className="filter__viewer--item"
          >
            <p>{select}</p>
            <i className="fa-solid fa-circle-minus"></i>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default Selecciones;
