import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPriceThunk } from "../../store/slices/price.slice";
import TipoVehiculo from "./filters/tipoVehiculo";
import Modelos from "./filters/Modelos";
import Colores from "./filters/Colores";
import Estados from "./filters/Estados";
import Valor from "./filters/Valor";
import Selecciones from "./filters/Selecciones";

const Filter = () => {
  const dispatch = useDispatch();
  const isView = useSelector((state) => state.isView);

  useEffect(() => {
    dispatch(getPriceThunk());
  }, []);

  return (
    <div className="filter">
      <div className="filter__options">
        <Selecciones />
        <div>ajeflljkfa</div>
        {isView && (
          <>
            <br />
            <br />
            <h5 className="filter__tittle">Filtros</h5>
            <TipoVehiculo />
            <Modelos />
            <Colores />
            <Estados />
            <Valor />
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
