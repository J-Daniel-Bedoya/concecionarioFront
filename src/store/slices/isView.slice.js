import { createSlice } from "@reduxjs/toolkit";

export const isViewSlice = createSlice({
  name: "isView",
  initialState: {
    isView: false,
    isViewNav: false, // Agregamos isViewNav como parte del estado inicial
    isViewEdit: false,
    isViewSell: false,
  },
  reducers: {
    setIsView: (state, action) => {
      state.isView = action.payload; // Actualizamos isView en el estado
    },
    setIsViewNav: (state, action) => {
      state.isViewNav = action.payload; // Actualizamos isViewNav en el estado
    },
    setIsViewEdit: (state, action) => {
      state.isViewEdit = action.payload;
    },
    setIsViewSell: (state, action) => {
      state.isViewSell = action.payload;
    },
  },
});

export const { setIsView, setIsViewNav, setIsViewEdit, setIsViewSell } =
  isViewSlice.actions;
export default isViewSlice.reducer;
