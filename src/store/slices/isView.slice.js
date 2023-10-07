import { createSlice } from "@reduxjs/toolkit";

export const isViewSlice = createSlice({
  name: "isView",
  initialState: {
    isView: false,
    isViewNav: false, // Agregamos isViewNav como parte del estado inicial
  },
  reducers: {
    setIsView: (state, action) => {
      state.isView = action.payload; // Actualizamos isView en el estado
    },
    setIsViewNav: (state, action) => {
      state.isViewNav = action.payload; // Actualizamos isViewNav en el estado
    },
  },
});

export const { setIsView, setIsViewNav } = isViewSlice.actions;
export default isViewSlice.reducer;
