import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const loaderSlice = createSlice({
	name: 'loader',
    initialState: true,
    reducers: {
        setLoading: (state, action) => {
            return action.payload
        }
    }
})

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;