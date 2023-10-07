import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const apiVehicles =
  "https://concesionarioback-production.up.railway.app/api/v1";

export const priceSlice = createSlice({
  name: "price",
  initialState: [],
  reducers: {
    setPrice: (state, actions) => {
      return actions.payload;
    },
  },
});

export const getPriceThunk = () => async (dispatch) => {
  await axios.get(`${apiVehicles}/price`, getConfig()).then((res) => {
    dispatch(setPrice(res.data));
  });
};

export const { setPrice } = priceSlice.actions;
export default priceSlice.reducer;
