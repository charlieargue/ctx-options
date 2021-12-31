import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lastName: 'Sacks',
};

// ##################################################################################
// # ✅ LAST NAME ✅ RTK REDUCER & ACTIONS
// ##################################################################################
const lastNameSlice = createSlice({
    name: 'lastName',
    initialState,
    reducers: {
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
    },
});

export const { setLastName } = lastNameSlice.actions;
export default lastNameSlice.reducer;
