import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getVehiclesThunk } from "../../store/slices/vehicles.slice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);
  const arrFilters = useSelector((state) => state.filters);
  const price = useSelector((state) => state.valor);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    dispatch(getVehiclesThunk());
  }, []);

  useEffect(() => {
    if (arrFilters.length !== 0) {
      const filteredVehicles = vehicles.filter((item) => {
        return arrFilters.every((filter) => {
          let estado = item.estado;
          estado = item.esNuevo === true ? "Nuevo" : "Usado";

          return (
            `${item.tipo}s` === filter ||
            item.modelo === filter ||
            item.color === filter ||
            estado === filter ||
            (item.precio >= parseInt(price[0]) &&
              item.precio <= parseInt(price[1]))
          );
        });
      });

      setVehicle(filteredVehicles);
    } else {
      setVehicle(vehicles);
    }
  }, [vehicles, arrFilters]);

  // console.log(vehicle);

  return (
    <div className="productsList">
      {vehicle.map((prod, i) => (
        <ProductCard vehicle={prod} key={i} />
      ))}
    </div>
  );
};

export default ProductsList;
