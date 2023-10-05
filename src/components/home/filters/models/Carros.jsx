import React from "react";
import useChecksFiltros from "../../hooks/useChecksFiltros";
import useDatosFiltros from "../../hooks/useDatosFiltros";
import { useSelector } from "react-redux";

const Carros = () => {
  const validacion = useSelector((state) => state.validacion);
  const { carros } = useDatosFiltros();
  const { clickCheckbox } = useChecksFiltros();

  return (
    <>
      {carros.map((carro, i) => (
        <div
          key={i}
          onClick={() => {
            clickCheckbox(carro, "modelos_carro");
          }}
          className="options__sub--div"
          style={{
            color: !validacion.includes(carro) && "var(--cl-checkFilters)",
          }}
        >
          <p>{carro}</p>
        </div>
      ))}
    </>
  );
};

export default Carros;
