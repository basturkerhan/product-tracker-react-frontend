import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pTracker: null,
}

export const contractsSlice = createSlice({
    name: "contracts",
    initialState,
    reducers: {
        setPTrackerContract: (state, action) => {
            state.pTracker = action.payload;
        }
    }
});

export const {setPTrackerContract} = contractsSlice.actions;
export default contractsSlice.reducer;