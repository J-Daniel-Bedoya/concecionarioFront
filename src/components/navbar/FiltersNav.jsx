import React, { useRef } from "react";
import Valor from "../home/filters/Valor";

import {
  Colores,
  Estados,
  Modelos,
  TipoVehiculo,
} from "../home/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { setIsViewNav } from "../../store/slices/isView.slice";
import { CSSTransition } from "react-transition-group";

const FiltersNav = ({ isBlock }) => {
  //
  const myRef = useRef();
  const dispatch = useDispatch();

  const isView = useSelector((state) => state.isView);
  const isViewNav = isView.isViewNav;

  return (
    <>
      {isBlock && (
        <div className="filter__container">
          <div
            className="filter__container--title"
            onClick={() => dispatch(setIsViewNav(!isViewNav))}
          >
            <div className="title__text">
              <i className="fa-solid fa-filter"></i>
              <span>Filtros</span>
            </div>
            <div className="title__icon">
              {isViewNav ? (
                <i className="fa-solid fa-caret-up"></i>
              ) : (
                <i className="fa-solid fa-caret-down"></i>
              )}
            </div>
          </div>
          <CSSTransition
            in={isViewNav}
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
    </>
  );
};

export default FiltersNav;
