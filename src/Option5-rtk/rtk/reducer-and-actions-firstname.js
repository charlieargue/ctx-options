import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: 'Oliver',
};

// ##################################################################################
// # ✅ FIRST NAME ✅ RTK REDUCER & ACTIONS
// ##################################################################################
const firstNameSlice = createSlice({
    name: 'firstName',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
    },
});

export const { setFirstName } = firstNameSlice.actions;
export default firstNameSlice.reducer;
