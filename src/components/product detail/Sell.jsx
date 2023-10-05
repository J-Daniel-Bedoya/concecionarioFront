import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { sellVehicleThunk } from "../../store/slices/vehicles.slice";

const Sell = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const valueDocument = watch("documento");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit = (data) => {
    console.log(data);
    dispatch(sellVehicleThunk(id, data));
  };

  const handleTypeChange = (e) => {
    setValue(valueDocument, e.target.value);
  };

  return (
    <div>
      <button variant="primary" onClick={handleShow}>
        Sell
      </button>

      <div show={show} onHide={handleClose}>
        <div closeButton>
          <p>Sell</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3" controlId="exampleInput1">
              <label style={{ display: "block" }}>Identification</label>
              <select
                className="form__selection"
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
            <div className="mb-3" controlId="exampleinputInput1">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Jonh Doe"
                required
                {...register("nombreCompleto")}
              />
            </div>
            <button
              type="submit"
              variant="primary"
              onClick={() => navigate("/home")}
            >
              Sell
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Sell;
