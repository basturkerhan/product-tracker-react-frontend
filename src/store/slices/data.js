import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    provider: null,
    signer: null,
    address: null,
    account: null,
    userRole: null
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setProvider: (state, action) => {
            state.provider = action.payload;
        },
        setSigner: (state, action) => {
            state.signer = action.payload;
        },
        setAddress: (state,action) => {
            state.address = action.payload;
        },
        setAccount: (state,action) => {
            state.account = action.payload;
        },
        setUserRole: (state,action) => {
            state.userRole = action.payload;
        }, 
    }
});

export const {setProvider,setSigner,setAddress,setAccount,setUserRole} = dataSlice.actions;
export default dataSlice.reducer;