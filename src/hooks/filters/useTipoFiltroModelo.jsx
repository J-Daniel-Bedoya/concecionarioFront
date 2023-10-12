import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/slices/filters.slice";

const useTipoFiltroModelo = () => {
  const dispatch = useDispatch();
  const arrSelecciones = useSelector((state) => state.filters);
  const [verFiltroCarros, setVerFiltroCarros] = useState(false);
  const [verFiltroMotos, setVerFiltroMotos] = useState(false);

  useEffect(() => {
    dispatch(setFilter(arrSelecciones));

    if (arrSelecciones.includes("Carros") && arrSelecciones.includes("Motos")) {
      setVerFiltroCarros(true);
      setVerFiltroMotos(true);
    } else if (arrSelecciones.includes("Carros")) {
      setVerFiltroCarros(true);
      setVerFiltroMotos(false);
    } else if (arrSelecciones.includes("Motos")) {
      setVerFiltroCarros(false);
      setVerFiltroMotos(true);
    } else {
      setVerFiltroCarros(false);
      setVerFiltroMotos(false);
    }
  }, [arrSelecciones]);

  return {
    verFiltroCarros,
    verFiltroMotos,
  };
};

export default useTipoFiltroModelo;
