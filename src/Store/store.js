import { configureStore } from "@reduxjs/toolkit";

import cartReducers from "./Slices/cartSlice";

const store = configureStore({
    reducer:{
        cart:cartReducers,
    },
});

export default store;