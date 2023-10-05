import { createSlice } from '@reduxjs/toolkit';
  
export const validacionSlice = createSlice({
  name: 'validacion',
  initialState: [],
  reducers: {
    setValidacion: (state, actions) => {
        return actions.payload
    }
  }
})
  
export const { setValidacion } = validacionSlice.actions;
export default validacionSlice.reducer;