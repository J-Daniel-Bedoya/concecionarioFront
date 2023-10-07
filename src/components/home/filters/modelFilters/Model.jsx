import React, { useRef } from "react";

import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Button from "./modelComponents/Button";
import { ListOptions, ListOptionsModels } from "./modelComponents/listOptions";

const Model = ({ tipo, name, arrElements, despliegue }) => {
  //
  const myRef = useRef();
  const validacion = useSelector((state) => state.validacion);

  return (
    <div className="filter__container--options">
      <Button tipo={tipo} name={name} despliegue={despliegue} />
      <CSSTransition
        in={despliegue}
        timeout={300}
        classNames="expand"
        unmountOnExit
      >
        <div className="list" ref={myRef}>
          <ListOptions
            type={tipo}
            arrElements={arrElements}
            validacion={validacion}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

const Model2 = ({
  tipo,
  name,
  despliegue,
  warning,
  verFiltroCarros,
  verFiltroMotos,
}) => {
  //
  const myRef = useRef();
  const validacion = useSelector((state) => state.validacion);

  return (
    <div className="filter__container--options">
      <Button tipo={tipo} name={name} despliegue={despliegue} />
      <CSSTransition
        in={despliegue}
        timeout={300}
        classNames="expand"
        unmountOnExit
      >
        <div className="list" ref={myRef}>
          <ListOptionsModels
            tipo={tipo}
            warning={warning}
            verFiltroCarros={verFiltroCarros}
            verFiltroMotos={verFiltroMotos}
            validacion={validacion}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export { Model, Model2 };
