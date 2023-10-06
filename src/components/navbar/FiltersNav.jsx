import React from "react";
import TipoVehiculo from "../home/filters/tipoVehiculo";
import Modelos from "../home/filters/Modelos";
import Colores from "../home/filters/Colores";
import Estados from "../home/filters/Estados";
import Valor from "../home/filters/Valor";

const FiltersNav = ({ isBlock }) => {
  return (
    <>
      {isBlock && (
        <div className="navbar__container--filter">
          <h5 className="filter__tittle">Filtros</h5>
          <TipoVehiculo />
          <Modelos />
          <Colores />
          <Estados />
          <Valor />
        </div>
      )}
    </>
  );
};

export default FiltersNav;
