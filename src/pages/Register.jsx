import { useState } from "react";
import Navbar from "../components/home/Navbar";
import Arrays from "../../public/arrays.json";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { createVehicle } from "../store/slices/vehicles.slice";
import { useForm } from "react-hook-form";
import { createVehicleThunk } from "../store/slices/vehicles.slice";

const Register = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const dispatch = useDispatch();
  const valueType = watch("tipo");
  const valueIsNew = watch("esNuevo");

  const submit = (data) => {
    console.log(data);
    const img = data.img[0].name;
    const precio = parseInt(data.precio);
    const kilometraje = parseInt(data.kilometraje);
    const numCilindraje = parseInt(data.cilindraje);
    const numVelocidades = parseInt(data.numVelocidades);
    data.img = img;
    data.precio = precio;
    data.kilometraje = kilometraje;
    data.cilindraje = numCilindraje;
    data.numVelocidades = numVelocidades;
    const newData = {
      tipo: data.tipo,
      modelo: data.modelo,
      color: data.color,
      esNuevo: data.esNuevo === "Nuevo" && true,
      img: data.img,
      kilometraje: valueIsNew === "Usado" ? data.kilometraje : 0,
      cilindraje: data.cilindraje,
      numVelocidades: data.numVelocidades,
      precio: data.precio,
      fechaRegistro: data.fechaRegistro,
    };
    dispatch(createVehicleThunk(newData));
  };

  const handleTypeChange = (e) => {
    setValue(valueType, e.target.value);
  };
  const handleStateChange = (e) => {
    setValue(valueIsNew, e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="register">
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group
            style={{ display: "flex", width: "max-content" }}
            controlId="formBasicEmail"
          >
            <Form.Label>Type</Form.Label>
            <select
              style={{ display: "inline-block" }}
              value={valueType}
              onChange={handleTypeChange}
              className="form__selection"
              {...register("tipo")}
            >
              <option value="Carro">Carro</option>
              <option value="Moto">Moto</option>
            </select>
            <select
              style={{ display: "inline-block" }}
              value={valueIsNew}
              onChange={handleStateChange}
              className="form__selection"
              {...register("esNuevo")}
            >
              <option value={"Nuevo"}>Nuevo</option>
              <option value={"Usado"}>Usado</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Color</Form.Label>
            <Form.Control
              placeholder="Enter color"
              type="text"
              {...register("color")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter model"
              {...register("modelo")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              min="10000"
              max="250000000"
              {...register("precio")}
            />
          </Form.Group>
          {valueType === "Moto" && (
            <div>
              <Form.Group className="mb-3">
                <Form.Label>Cylinder capacity</Form.Label>
                <Form.Control
                  max="400"
                  type="number"
                  placeholder="Enter capacity"
                  {...register("cilindraje")}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Velocity number</Form.Label>
                <Form.Control
                  max="6"
                  min="0"
                  type="number"
                  placeholder="Enter number"
                  {...register("numVelocidades")}
                />
              </Form.Group>
            </div>
          )}
          {valueIsNew === "Usado" && (
            <Form.Group className="mb-3">
              <Form.Label>Kilometer</Form.Label>
              <Form.Control
                min="1"
                type="number"
                placeholder="km"
                {...register("kilometraje")}
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Register Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              {...register("fechaRegistro")}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/png, image/jpeg"
              {...register("img")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
