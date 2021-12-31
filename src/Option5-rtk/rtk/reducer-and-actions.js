import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: 'Harry',
    lastName: 'Potter',
};

// ##################################################################################
// # RTK REDUCER & person slice / ACTIONS
// ##################################################################################
const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
    },
});

export const { setFirstName, setLastName } = personSlice.actions;
export default personSlice.reducer;
