import ProductCard from "../components/products/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sell from "../components/product detail/Sell";
import Edit from "../components/product detail/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getVehiclesThunk } from "../store/slices/vehicles.slice";

const ProductDetail = () => {
  useEffect(() => {
    dispatch(getVehiclesThunk());
  }, []);

  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);
  const { id } = useParams();
  const vehicle = vehicles.find((element) => element.id == id);
  const navigate = useNavigate();
  const vehiclesFiltered = vehicles.filter((e) => vehicle.tipo == e.tipo);
  const [optionEdit, setOptionEdit] = useState(false);
  const [optionSell, setOptionSell] = useState(false);

  return (
    <div className="productDetail">
      <img className="productDetail__img" src={vehicle?.img} fluid />
      <div className="productDetail__container">
        <h1 className="productDetail__container--title">{vehicle?.modelo}</h1>
        <div className="productDetail__container--info">
          <ul className="info">
            <li className="info__list">Marca: Honda</li>
            <li className="info__list">Type : {vehicle?.tipo}</li>
            <li className="info__list">
              State: {vehicle?.esNuevo ? "Nuevo" : "Usado"}
            </li>
            <li className="info__list">Color: {vehicle?.color}</li>
            <li className="info__list">RD: {vehicle?.fechaRegistro}</li>
            {vehicle?.tipo === "moto" && (
              <li className="info__list">
                Cylinder Capacity: {vehicle?.cilindraje}cc
              </li>
            )}
            {vehicle?.tipo === "moto" && (
              <li className="info__list">
                Velocity Number: {vehicle?.numVelocidades}
              </li>
            )}
            <li className="info__list">Price: ${vehicle?.precio}</li>
          </ul>
          <div className="options">
            <button
              className="options__edit"
              title="edit"
              onClick={() => setOptionEdit(!optionEdit)}
            >
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button
              className="options__sell"
              title="sell"
              onClick={() => setOptionSell(!optionSell)}
            >
              <i class="fa-solid fa-camera-rotate"></i>
            </button>
            <div className="options__select">
              {optionEdit && <Edit vehicle={vehicle} />}

              {optionSell && <Sell vehicle={vehicle} />}
            </div>
          </div>
        </div>
      </div>
      <div className="productDetail__carrusel">
        <div className="productDetail__carrusel--products">
          {vehiclesFiltered.map((vehicle) => (
            <ProductCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
