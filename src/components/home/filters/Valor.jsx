import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDespliegues } from "../../../store/slices/despliegues.slice";
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import { setFilter } from "../../../store/slices/filters.slice";
import { setValor } from "../../../store/slices/valor.slice";

const Valor = () => {
  const dispatch = useDispatch();
  const myRef = useRef();
  const despliegue = useSelector((state) => state.despliegues["valor"]);
  const arrSelecciones = useSelector((state) => state.filters);

  const { register, handleSubmit } = useForm();

  const submitValor = (precio) => {
    const valor = `${precio.min} a ${precio.max}`;
    dispatch(setFilter([...arrSelecciones, valor]));
    dispatch(setValor([precio.min, precio.max]));
  };

  return (
    <div className="filter__options--sub">
      <button
        onClick={() => dispatch(setDespliegues("valor"))}
        className="filter__button"
        style={{
          color: despliegue && "var(--cl-identity)",
        }}
      >
        Valor{" "}
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
        nodeRef={myRef}
      >
        <div className="options__sub" ref={myRef}>
          <form
            onSubmit={handleSubmit(submitValor)}
            className="options__sub--price"
          >
            <div className="ontions__sub--price-input">
              <input
                type="text"
                placeholder="10000"
                className="filter__input"
                autoComplete="off"
                {...register("min", { min: 10000 })}
              />
              <p>a</p>
              <input
                type="text"
                placeholder="250000000"
                className="filter__input"
                autoComplete="off"
                {...register("max", { max: 250000000 })}
              />
            </div>
            <button type="submit">Filtrar</button>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Valor;
