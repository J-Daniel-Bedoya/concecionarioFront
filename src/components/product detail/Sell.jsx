import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { sellVehicleThunk } from "../../store/slices/vehicles.slice";
import { setIsViewSell } from "../../store/slices/isView.slice";

const Sell = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const valueDocument = watch("documento");

  const submit = (data) => {
    console.log(data);
    dispatch(sellVehicleThunk(id, data));
  };

  const handleTypeChange = (e) => {
    setValue(valueDocument, e.target.value);
  };

  return (
    <div className="sell">
      <div className="sell__container">
        <form onSubmit={handleSubmit(submit)} className="sell__container--form">
          <div className="sellOptions">
            <label style={{ display: "block" }}>Identification</label>
            <select
              className="sellOptions__selection"
              style={{ display: "inline-block", margin: 0, width: "20%" }}
              name="#"
              value={valueDocument}
              onChange={handleTypeChange}
              required
              {...register("documento")}
            >
              <option>C.C</option>
              <option>Cedula de extranjeria</option>
              <option>Pasaporte</option>
            </select>
            <input
              style={{ display: "inline-block", width: "80%" }}
              type="text"
              placeholder="1234567890"
              required
              {...register("numDocumento")}
            />
          </div>
          <div className="sellOptions">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Jonh Doe"
              required
              {...register("nombreCompleto")}
            />
          </div>
          <div className="sellButtons">
            <button
              className="sellButtons__close"
              onClick={() => dispatch(setIsViewSell(false))}
            >
              Close
            </button>
            <button
              className="sellButtons__save"
              type="submit"
              variant="primary"
              onClick={() => navigate("/home")}
            >
              Sell
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Sell;
