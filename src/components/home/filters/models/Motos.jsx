import React from "react";
import useChecksFiltros from "../../hooks/useChecksFiltros";
import useDatosFiltros from "../../hooks/useDatosFiltros";
import { useSelector } from "react-redux";

const Motos = () => {
  const validacion = useSelector((state) => state.validacion);
  const { motos } = useDatosFiltros();
  const { clickCheckbox } = useChecksFiltros();

  return (
    <>
      {motos.map((moto, i) => (
        <div
          key={i}
          onClick={() => {
            clickCheckbox(moto, "modelos_moto");
          }}
          className="options__sub--div"
          style={{
            color: !validacion.includes(moto) && "var(--cl-checkFilters)",
          }}
        >
          <p>{moto}</p>
        </div>
      ))}
    </>
  );
};

export default Motos;
