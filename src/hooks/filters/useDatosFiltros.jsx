import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Arrays from "../../../public/arrays.json";

const useDatosFiltros = () => {
  const arrModelos = useSelector((state) => state.price);

  const [tipo, setTipo] = useState([]);
  const [colores, setColores] = useState([]);
  const [estado, setEstado] = useState([]);
  const [carros, setCarros] = useState([]);
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    const { tipo, colores, estado } = Arrays;
    const carros = [];
    const motos = [];
    for (const modelo of arrModelos) {
      if (modelo.tipo == "Carro") {
        carros.push(modelo.modelo);
      } else {
        motos.push(modelo.modelo);
      }
    }

    setTipo(tipo);
    setColores(colores);
    setEstado(estado);
    setCarros(carros);
    setMotos(motos);
  }, [arrModelos]);

  return {
    tipo,
    colores,
    estado,
    carros,
    motos,

    setTipo,
    setColores,
    setCarros,
    setEstado,
    setMotos,
  };
};

export default useDatosFiltros;
