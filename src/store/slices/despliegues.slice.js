import { createSlice } from "@reduxjs/toolkit";

export const desplieguesSlice = createSlice({
  name: "despliegues",
  initialState: {
    tipo: false,
    modelos: false,
    colores: false,
    estado: false,
    valor: false,
  },
  reducers: {
    setDespliegues: (state, actions) => {
      state[actions.payload] = !state[actions.payload];
    },
  },
});

export const { setDespliegues } = desplieguesSlice.actions;
export default desplieguesSlice.reducer;
