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

  return (
    <div className="productDetail">
      <img className="productDetail__img" src={vehicle?.img} fluid />
      <div className="productDetail__container">
        <h1 className="productDetail__container--title">{vehicle?.modelo}</h1>
        <p className="productDetail__container--brand">Honda</p>
        <div className="productDetail__container--info">
          <ul className="info">
            <li className="info__list">Type : {vehicle?.tipo}</li>
            <li className="info__list">
              State: {vehicle?.esNuevo ? "Nuevo" : "Usado"}
            </li>
            <li className="info__list">Color: {vehicle?.color}</li>
            <li className="info__list">
              Register Date: {vehicle?.fechaRegistro}
            </li>
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
          <button id="button" title="Options">
            <Edit vehicle={vehicle} />
            <Sell vehicle={vehicle} />
          </button>
        </div>
      </div>
      <div className="productDetail__carrousel">
        <div className="productDetail__carrousel--products">
          {vehiclesFiltered.map((vehicle) => (
            <ProductCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
