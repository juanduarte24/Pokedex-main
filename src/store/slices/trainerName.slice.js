import { createSlice } from '@reduxjs/toolkit';

export const trainerNameslice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
setTrainerG : ( state , action ) => action.payload
    }
})

export const { setTrainerG } = trainerNameslice.actions;

export default trainerNameslice.reducer;

