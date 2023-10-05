import React from "react";
import useDatosFiltros from "../hooks/useDatosFiltros";
import useChecksFiltros from "../hooks/useChecksFiltros";
import { useDispatch, useSelector } from "react-redux";
import { setDespliegues } from "../../../store/slices/despliegues.slice";
import { CSSTransition } from "react-transition-group";

const TipoVehiculo = () => {
  //
  const dispatch = useDispatch();
  const validacion = useSelector((state) => state.validacion);
  const despliegue = useSelector((state) => state.despliegues["tipo"]);

  const { tipo } = useDatosFiltros();
  const { clickCheckbox } = useChecksFiltros();

  return (
    <div className="filter__options--sub">
      <button
        onClick={() => dispatch(setDespliegues("tipo"))}
        className="filter__button"
        style={{
          color: despliegue && "var(--cl-identity)",
        }}
      >
        Vehículo{" "}
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
          {tipo.map((tipo, i) => (
            <div
              key={i}
              onClick={() => clickCheckbox(tipo, "tipo")}
              className="options__sub--div"
              style={{
                color: !validacion.includes(tipo) && "var(--cl-checkFilters)",
              }}
            >
              <p>{tipo}</p>
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default TipoVehiculo;
