import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../store/slices/filters.slice";
import { setValidacion } from "../../../store/slices/validacion.slice";

const useChecksFiltros = () => {
  const dispatch = useDispatch();
  const arrSelecciones = useSelector((state) => state.filters);
  const validacion = useSelector((state) => state.validacion);

  const clickCheckbox = (name, filter) => {
    if (arrSelecciones.includes(name)) {
      dispatch(setFilter(arrSelecciones.filter((item) => item !== name)));
      dispatch(setValidacion([]));
    } else {
      if (!validacion.includes(filter)) {
        dispatch(setFilter([...arrSelecciones, name]));
        dispatch(setValidacion([...validacion, name, filter]));
      }
    }
  };

  return {
    clickCheckbox,
  };
};

export default useChecksFiltros;
