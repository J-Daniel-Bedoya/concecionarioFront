import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPriceThunk } from "../../store/slices/price.slice";
import Selections from "./filters/Selections";
import {
  Colores,
  Estados,
  Modelos,
  TipoVehiculo,
} from "./filters/OptionsFilters";
import Valor from "./filters/Valor";
import { CSSTransition } from "react-transition-group";

const Filter = () => {
  const myRef = useRef();
  const dispatch = useDispatch();
  const isView = useSelector((state) => state.isView);

  useEffect(() => {
    dispatch(getPriceThunk());
  }, []);

  return (
    <div className="filter">
      <Selections />
      {isView.isView && (
        <div className="filter__container">
          <div className="filter__container--title">
            <div className="title__text">
              <i className="fa-solid fa-filter"></i>
              <span>Filtros</span>
            </div>
          </div>
          <CSSTransition
            in={isView.isView}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <div className="fondo__filters" ref={myRef}>
              <TipoVehiculo />
              <Modelos />
              <Colores />
              <Estados />
              <Valor />
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

export default Filter;
