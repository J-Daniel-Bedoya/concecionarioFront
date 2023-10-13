import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { setDespliegues } from "../../../store/slices/despliegues.slice";
import { setFilter } from "../../../store/slices/filters.slice";
import { setValor } from "../../../store/slices/valor.slice";

const Valor = () => {
  const dispatch = useDispatch();
  const myRef = useRef();
  const despliegue = useSelector((state) => state.despliegues["valor"]);
  const arrSelecciones = useSelector((state) => state.filters);

  const { register, handleSubmit, reset } = useForm();

  const submitValor = (precio) => {
    const valor = `${precio.min} a ${precio.max}`;
    dispatch(setFilter([...arrSelecciones, valor]));
    dispatch(setValor([precio.min, precio.max]));

    reset();
  };

  return (
    <div className="filter__container--options">
      <div
        onClick={() => dispatch(setDespliegues("valor"))}
        className="buttons"
        style={{
          color: despliegue && "#",
        }}
      >
        <p>Valor </p>
        {despliegue ? (
          <i className="fa-solid fa-caret-up"></i>
        ) : (
          <i className="fa-solid fa-caret-down"></i>
        )}
      </div>
      <CSSTransition
        in={despliegue}
        timeout={300}
        classNames="expand"
        unmountOnExit
      >
        <div className="list" ref={myRef}>
          <form onSubmit={handleSubmit(submitValor)} className="list__form">
            <div className="list__form--inputs">
              <input
                type="number"
                placeholder="Desde 10000"
                autoComplete="off"
                {...register("min", { min: 10000 })}
              />
              {/* <p>a</p> */}
              <input
                type="number"
                placeholder="Hasta 250000000"
                autoComplete="off"
                {...register("max", { max: 250000000 })}
              />
            </div>
            <button className="list__form--button" type="submit">
              Filtrar
            </button>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Valor;
