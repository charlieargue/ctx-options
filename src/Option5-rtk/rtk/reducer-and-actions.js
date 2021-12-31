import { createSlice } from '@reduxjs/toolkit';

// 🔥 CULPRIT? 🔥 ... need to lift this to parent?? don't think that's right... n/a
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