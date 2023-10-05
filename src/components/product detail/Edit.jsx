import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateVehicleThunk } from "../../store/slices/vehicles.slice";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ vehicle }) => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submit = (data) => {
    // Clonar el objeto data
    const clonedData = { ...data };

    // Modificar el valor de img en el objeto clonado
    const formatImg = data.img[0]?.name;
    clonedData.img = formatImg;

    const fillData = {};
    for (const element in clonedData) {
      if (clonedData[element]) {
        fillData[element] = clonedData[element];
      }
    }

    dispatch(updateVehicleThunk(id, fillData)).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <button variant="primary" onClick={handleShow}>
        Edit
      </button>
      <div show={show} onHide={handleClose}>
        <div>
          <p>Edit</p>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(submit)}
            className="form-edit"
            id="edit-form"
          >
            {!vehicle?.esNuevo && (
              <div className="mb-3">
                <label>Kilometer</label>
                <input
                  type="number"
                  placeholder={`${vehicle?.kilometraje}`}
                  min={vehicle?.kilometraje}
                  {...register("kilometraje")}
                />
              </div>
            )}
            <div className="mb-3">
              <label>Color</label>
              <input
                type="text"
                placeholder={`${vehicle?.color}`}
                {...register("color")}
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="number"
                placeholder={`${vehicle?.precio}`}
                max="250000000"
                min="1000000"
                {...register("precio")}
              />
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                {...register("img")}
              />
            </div>
            <button variant="primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
