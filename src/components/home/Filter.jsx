import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Arrays from "../../../public/arrays.json";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/slices/filters.slice";
import { getPriceThunk } from "../../store/slices/price.slice";

const Filter = () => {
  const dispatch = useDispatch();
  //
  const arrModels = useSelector((state) => state.price);
  // const arrVehicles = useSelector((state) => state.vehicles);

  const [tipo, setTipo] = useState([]);
  const [color, setColor] = useState([]);
  const [estado, setEstado] = useState([]);
  const [carros, setCarros] = useState([]);
  const [motos, setMotos] = useState([]);
  //
  const [arrName, setArrName] = useState([]);
  //
  const [deployTipo, setDeployTipo] = useState(false);
  const [deployModels, setDeployModels] = useState(false);
  const [deployColors, setDeployColors] = useState(false);
  const [deployEstado, setDeployEstado] = useState(false);
  const [deployValor, setDeployValor] = useState(false);
  //
  const [colorTipo, setColorTipo] = useState("");
  const [colorModelo, setColorModelo] = useState("");
  const [colorColor, setColorColor] = useState("");
  const [colorEstado, setColorEstado] = useState("");
  const [colorValor, setColorValor] = useState("");
  //
  const [carroViewerModels, setCarroViewerModels] = useState(false);
  const [motoViewerModels, setMotoViewerModels] = useState(false);
  //
  const [arrId, setArrId] = useState([]);

  useEffect(() => {
    dispatch(getPriceThunk());
  }, []);

  // console.log(arrModels);
  useEffect(() => {
    const { tipo, colores, estado } = Arrays;
    const carros = [];
    const motos = [];
    for (const model of arrModels) {
      if (model.tipo == "Carro") {
        carros.push(model.modelo);
      } else {
        motos.push(model.modelo);
      }
    }
    setCarros(carros);

    // Actualiza las propiedades independientes
    setTipo(tipo);
    setColor(colores);
    setEstado(estado);
    setCarros(carros);
    setMotos(motos);
  }, [arrModels]);

  const select = (select) => {
    // Actualiza las propiedades independientes
    setDeployTipo(select === "tipo" ? !deployTipo : false);
    setColorTipo(select === "tipo" ? "tipo" : "");
    setDeployModels(select === "modelos" ? !deployModels : false);
    setColorModelo(select === "modelos" ? select : "");
    setDeployColors(select === "colors" ? !deployColors : false);
    setColorColor(select === "colors" ? select : "");
    setDeployEstado(select === "estado" ? !deployEstado : false);
    setColorEstado(select === "estado" ? select : "");
    setDeployValor(select === "valor" ? "valor" : false);
    setColorValor(select === "valor" ? select : "");
  };

  const clickCheckbox = (name, filter) => {
    if (arrName.includes(name)) {
      setArrName(arrName.filter((item) => item !== name));
    } else {
      setArrName([...arrName, name]);
      setArrId([...arrId, { name, filter }]);
      switch (filter) {
        case "tipo":
          setTipo([]);
          break;
        case "modelos_carro":
          setCarros([]);
          break;
        case "modelos_moto":
          setMotos([]);
          break;
        case "colors":
          setColor([]);
          break;
        case "estado":
          setEstado([]);
          break;
      }
    }
  };

  useEffect(() => {
    dispatch(setFilter(arrName));
    // const arrName = arrName;
    if (arrName.includes("Carros") && arrName.includes("Motos")) {
      setCarroViewerModels(true);
      setMotoViewerModels(true);
    } else if (arrName.includes("Carros")) {
      setCarroViewerModels(true);
      setMotoViewerModels(false);
    } else if (arrName.includes("Motos")) {
      setCarroViewerModels(false);
      setMotoViewerModels(true);
    } else {
      setCarroViewerModels(false);
      setMotoViewerModels(false);
    }
  }, [arrName]);

  const deselect = (name) => {
    if (arrName.includes(name)) {
      const updatedArrName = arrName.filter((item) => item !== name);
      const { tipo, colores, estado } = Arrays;
      const carros = [];
      const motos = [];
      for (const model of arrModels) {
        if (model.tipo == "Carro") {
          carros.push(model.modelo);
        } else {
          motos.push(model.modelo);
        }
      }

      arrId.forEach((content) => {
        if (content.name === name) {
          switch (content.filter) {
            case "tipo":
              setTipo(tipo);
              break;
            case "modelos_carro":
              setCarros(carros);
              break;
            case "modelos_moto":
              setMotos(motos);
              break;
            case "colors":
              setColor(colores);
              break;
            case "estado":
              setEstado(estado);
              break;
          }
        }
      });
      setArrName(updatedArrName);
    }
  };
  return (
    <div className="filter">
      <div className="filter__options">
        <div className="filter__viewer">
          {arrName.map((select, i) => (
            <div
              key={i}
              onClick={() => deselect(select)}
              className="filter__viewer-item"
            >
              <p>{select}</p>
              <b>x</b>
            </div>
          ))}
        </div>
        <h5>Filtros</h5>
        <div className="filter__options--sub">
          <button
            onClick={() => select("tipo")}
            className="filter__button"
            style={{
              color: colorTipo === "tipo" ? "var(--cl-identity)" : "",
            }}
          >
            Tipo de vehículo
          </button>
          {deployTipo && (
            <div className="options__sub">
              {tipo.map((tipo, i) => (
                <div
                  key={i}
                  onClick={() => clickCheckbox(tipo, "tipo")}
                  className="options__sub--div"
                >
                  <p>{tipo}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter__options--sub">
          <button
            onClick={() => select("modelos")}
            className="filter__button"
            style={{
              color: colorModelo === "modelos" && "var(--cl-identity)",
            }}
          >
            Modelos
          </button>
          {deployModels && (
            <div className="options__sub">
              {carroViewerModels && (
                <>
                  {carros.map((carro, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        clickCheckbox(carro, "modelos_carro");
                      }}
                      className="options__sub--div"
                    >
                      <p>{carro}</p>
                    </div>
                  ))}
                </>
              )}
              {motoViewerModels && (
                <>
                  {motos.map((moto, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        clickCheckbox(moto, "modelos_moto");
                      }}
                      className="options__sub--div"
                    >
                      <p>{moto}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
        <div className="filter__options--sub">
          <button
            onClick={() => select("colors")}
            className="filter__button"
            style={{
              color: colorColor === "colors" && "var(--cl-identity)",
            }}
          >
            Colores
          </button>
          {deployColors && (
            <div className="options__sub">
              {color.map((color, i) => (
                <div
                  key={i}
                  onClick={() => clickCheckbox(color, "colors")}
                  className="options__sub--div"
                >
                  <p>{color}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter__options--sub">
          <button
            onClick={() => select("estado")}
            className="filter__button"
            style={{
              color: colorEstado === "estado" && "var(--cl-identity)",
            }}
          >
            Estado
          </button>
          {deployEstado && (
            <div className="options__sub">
              {estado.map((estado, i) => (
                <div
                  key={i}
                  onClick={() => clickCheckbox(estado, "estado")}
                  className="options__sub--div"
                >
                  <p>{estado}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="filter__options--sub">
          <button
            onClick={() => select("valor")}
            className="filter__button"
            style={{
              color: colorValor === "valor" && "var(--cl-identity)",
            }}
          >
            Valor
          </button>
          {deployValor && (
            <div className="options__sub">
              <input type="number" placeholder="0" className="filter__input" />
              <p>a</p>
              <input
                type="number"
                placeholder="Máx 250.000"
                className="filter__input"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
