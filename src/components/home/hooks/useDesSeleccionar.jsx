import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../store/slices/filters.slice";
import { setValidacion } from "../../../store/slices/validacion.slice";

const useDesSeleccionar = () => {
  const dispatch = useDispatch();
  const arrSelecciones = useSelector((state) => state.filters);

  const desSelecionar = (tipoSeleccion) => {
    if (arrSelecciones.includes(tipoSeleccion)) {
      const updatedArrSelecciones = arrSelecciones.filter(
        (item) => item !== tipoSeleccion
      );
      dispatch(setFilter(updatedArrSelecciones));
      dispatch(setValidacion([]));
    }
  };
  return {
    desSelecionar,
  };
};

export default useDesSeleccionar;
