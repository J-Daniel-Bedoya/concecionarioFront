import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateVehicleThunk } from "../../store/slices/vehicles.slice";
import { useNavigate, useParams } from "react-router-dom";
import { setIsViewEdit } from "../../store/slices/isView.slice";

const Edit = ({ vehicle }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div className="edit">
      <div className="edit__container">
        <form
          onSubmit={handleSubmit(submit)}
          className="edit__container--form"
          id="edit-form"
        >
          {!vehicle?.esNuevo && (
            <div className="editOptions">
              <label>Kilometer</label>
              <input
                type="number"
                placeholder={`${vehicle?.kilometraje}`}
                min={vehicle?.kilometraje}
                {...register("kilometraje")}
              />
            </div>
          )}
          <div className="editOptions">
            <label>Color</label>
            <input
              type="text"
              placeholder={`${vehicle?.color}`}
              {...register("color")}
            />
          </div>
          <div className="editOptions">
            <label>Price</label>
            <input
              type="number"
              placeholder={`${vehicle?.precio}`}
              max="250000000"
              min="1000000"
              {...register("precio")}
            />
          </div>
          <div className="editOptions">
            <label>Image</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register("img")}
            />
          </div>
          <div className="editButtons">
            <button
              className="editButtons__close"
              onClick={() => dispatch(setIsViewEdit(false))}
            >
              Close
            </button>
            <button
              className="editButtons__save"
              variant="primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
