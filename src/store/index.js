import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./slices/data";
import contractsSlice from "./slices/contract";
import firmSlice from "./slices/firm";

export const store = configureStore({
    reducer: {
        data: dataSlice,
        contracts: contractsSlice,
        firm: firmSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    }
});