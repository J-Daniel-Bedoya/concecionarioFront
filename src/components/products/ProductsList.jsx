import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getVehiclesThunk } from "../../store/slices/vehicles.slice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);
  const arrFilters = useSelector((state) => state.filters);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    dispatch(getVehiclesThunk());
  }, []);

  useEffect(() => {
    if (arrFilters.length !== 0) {
      const filteredVehicles = vehicles.filter((item) => {
        return arrFilters.every((filter) => {
          // Comprueba si el filtro coincide con alguna propiedad del vehículo
          return (
            `${item.tipo}s` === filter ||
            item.color === filter ||
            item.estado === filter ||
            item.modelo === filter ||
            (parseFloat(item.precio) <= parseFloat(filter) &&
              parseFloat(item.precio) > 0)
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
