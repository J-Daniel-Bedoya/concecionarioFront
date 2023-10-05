import React, { useEffect, useState } from "react";

import useTipoFiltroModelo from "../hooks/useTipoFiltroModelo";
import { useDispatch, useSelector } from "react-redux";
import { setDespliegues } from "../../../store/slices/despliegues.slice";
import { CSSTransition } from "react-transition-group";
import Carros from "./models/carros";
import Motos from "./models/Motos";

const Modelos = () => {
  //
  const dispatch = useDispatch();
  const despliegue = useSelector((state) => state.despliegues["modelos"]);

  const { verFiltroCarros, verFiltroMotos } = useTipoFiltroModelo();
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (verFiltroCarros || verFiltroMotos) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [verFiltroCarros, verFiltroMotos]);

  return (
    <div className="filter__options--sub">
      <button
        onClick={() => dispatch(setDespliegues("modelos"))}
        className="filter__button"
        style={{
          color: despliegue && "var(--cl-identity)",
        }}
      >
        Modelos{" "}
        {despliegue ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
      </button>
      <CSSTransition
        in={despliegue}
        timeout={300}
        classNames="expand"
        unmountOnExit
      >
        <div className="options__sub">
          {warning ? (
            <>
              {verFiltroCarros && <Carros />}

              {verFiltroMotos && <Motos />}
            </>
          ) : (
            <p className="options_sub--warning">Selecciona un vehículo</p>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modelos;
