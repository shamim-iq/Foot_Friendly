import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice_Reducer";

const Store = configureStore({
    reducer:{
        Cart: CartSlice,
    },
})

export default Store