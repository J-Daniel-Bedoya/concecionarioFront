import { useDispatch } from "react-redux";

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
    <div className="register">
      <form onSubmit={handleSubmit(submit)}>
        <div
          style={{ display: "flex", width: "max-content" }}
          controlId="formBasicEmail"
        >
          <label>Type</label>
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
        </div>
        <div>
          <label>Color</label>
          <input placeholder="Enter color" type="text" {...register("color")} />
        </div>
        <div>
          <label>Model</label>
          <input
            type="text"
            placeholder="Enter model"
            {...register("modelo")}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            placeholder="Enter price"
            min="10000"
            max="250000000"
            {...register("precio")}
          />
        </div>
        {valueType === "Moto" && (
          <div>
            <div>
              <label>Cylinder capacity</label>
              <input
                max="400"
                type="number"
                placeholder="Enter capacity"
                {...register("cilindraje")}
              />
            </div>
            <div>
              <label>Velocity number</label>
              <input
                max="6"
                min="0"
                type="number"
                placeholder="Enter number"
                {...register("numVelocidades")}
              />
            </div>
          </div>
        )}
        {valueIsNew === "Usado" && (
          <div>
            <label>Kilometer</label>
            <input
              min="1"
              type="number"
              placeholder="km"
              {...register("kilometraje")}
            />
          </div>
        )}
        <div>
          <label>Register Date</label>
          <input
            type="date"
            placeholder="Enter Date"
            {...register("fechaRegistro")}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register("img")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
