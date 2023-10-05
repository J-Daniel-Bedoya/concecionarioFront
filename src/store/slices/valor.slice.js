import { createSlice } from '@reduxjs/toolkit';
  
export const valorSlice = createSlice({
  name: 'valor',
  initialState: [],
  reducers: {
    setValor: (state, actions) => {
        return actions.payload
    }
  }
})
  
export const { setValor } = valorSlice.actions;
export default valorSlice.reducer;