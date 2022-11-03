import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firmName: null,
    firmLocation: null
}

export const firmSlice = createSlice({
    name: "firm",
    initialState,
    reducers: {
        setFirmName: (state, action) => {
            state.firmName = action.payload;
        },
        setFirmLocation: (state, action) => {
            state.firmLocation = action.payload;
        }
    }
});

export const {setFirmName,setFirmLocation} = firmSlice.actions;
export default firmSlice.reducer;