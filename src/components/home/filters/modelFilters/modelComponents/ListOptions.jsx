import React from "react";
import useDatosFiltros from "../../../../../hooks/filters/useDatosFiltros";
import useChecksFiltros from "../../../../../hooks/filters/useChecksFiltros";

const ListOptions = ({ type, arrElements, validacion }) => {
  const { clickCheckbox } = useChecksFiltros();

  return (
    <>
      {arrElements?.map((tipo, i) => (
        <div
          key={i}
          onClick={() => clickCheckbox(tipo, type)}
          className="list__options"
          style={{
            backgroundColor: !validacion?.includes(tipo) ? "#000" : "#fff",
          }}
        >
          <p>{tipo}</p>
        </div>
      ))}
    </>
  );
};

const ListOptionsModels = ({
  tipo,
  warning,
  verFiltroCarros,
  verFiltroMotos,
  validacion,
}) => {
  const { carros, motos } = useDatosFiltros();

  return (
    <>
      {warning ? (
        <>
          {verFiltroCarros && (
            <ListOptions
              type={tipo}
              arrElements={carros}
              validacion={validacion}
            />
          )}

          {verFiltroMotos && (
            <ListOptions
              type={tipo}
              arrElements={motos}
              validacion={validacion}
            />
          )}
        </>
      ) : (
        <p className="list__warning">Selecciona un vehículo</p>
      )}
    </>
  );
};

export { ListOptions, ListOptionsModels };
