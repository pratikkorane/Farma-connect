import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        // Corrected the key name to match the reducer
    },
    devTools: true
});
