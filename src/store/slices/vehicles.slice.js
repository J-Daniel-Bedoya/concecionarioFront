import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoading } from "./loader.slice";
import getConfig from "../../utils/getConfig";

const apiVehicles =
  "https://concesionarioback-production.up.railway.app/api/v1";

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: [],
  reducers: {
    setVehicles: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { setVehicles } = vehiclesSlice.actions;

export const getVehiclesThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  return await axios
    .get(`${apiVehicles}/vehicles?offset=1&limit=9`, getConfig())
    .then((res) => {
      dispatch(setVehicles(res.data));
    })
    .finally(dispatch(setLoading(false)));
};

export const createVehicleThunk = (data) => async (dispatch) => {
  return await axios
    .post(`${apiVehicles}/vehicles/`, data, getConfig())
    .then((res) => dispatch(getVehiclesThunk()));
};

export const updateVehicleThunk = (vehicleId, data) => async (dispatch) => {
  return await axios
    .patch(`${apiVehicles}/vehicles/${vehicleId}`, data, getConfig())
    .then(dispatch(getVehiclesThunk()));
};

export const sellVehicleThunk = (vehicleId, body) => async (dispatch) => {
  return await axios
    .post(`${apiVehicles}/vehicles/${vehicleId}/sales/`, body, getConfig())
    .then(dispatch(getVehiclesThunk()))
    .catch((error) => console.log(error));
};

export default vehiclesSlice.reducer;
