import React, { useEffect, useState } from "react";
import useDatosFiltros from "../../../hooks/filters/useDatosFiltros";
import { useSelector } from "react-redux";
import useTipoFiltroModelo from "../../../hooks/filters/useTipoFiltroModelo";
import { Model, Model2 } from "./modelFilters/Model";

const TipoVehiculo = () => {
  //
  const despliegue = useSelector((state) => state.despliegues["tipo"]);
  const { tipo } = useDatosFiltros();

  return (
    <Model
      tipo={"tipo"}
      name={"Tipo"}
      arrElements={tipo}
      despliegue={despliegue}
    />
  );
};

const Modelos = () => {
  //
  const despliegue = useSelector((state) => state.despliegues["modelos"]);

  const { verFiltroCarros, verFiltroMotos } = useTipoFiltroModelo();
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (verFiltroCarros || verFiltroMotos) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [verFiltroCarros, verFiltroMotos]);

  return (
    <Model2
      tipo={"modelos"}
      name={"Modelos"}
      despliegue={despliegue}
      warning={warning}
      verFiltroCarros={verFiltroCarros}
      verFiltroMotos={verFiltroMotos}
    />
  );
};

const Colores = () => {
  //
  const despliegue = useSelector((state) => state.despliegues["colores"]);
  const { colores } = useDatosFiltros();

  return (
    <Model
      tipo={"colores"}
      name={"Color"}
      arrElements={colores}
      despliegue={despliegue}
    />
  );
};

const Estados = () => {
  //
  const despliegue = useSelector((state) => state.despliegues["estado"]);
  const { estado } = useDatosFiltros();

  return (
    <Model
      tipo={"estado"}
      name={"Estado"}
      arrElements={estado}
      despliegue={despliegue}
    />
  );
};

export { TipoVehiculo, Modelos, Colores, Estados };
