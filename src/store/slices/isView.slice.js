import { createSlice } from "@reduxjs/toolkit";

export const isViewSlice = createSlice({
  name: "isView",
  initialState: true,
  reducers: {
    setIsView: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { setIsView } = isViewSlice.actions;
export default isViewSlice.reducer;
