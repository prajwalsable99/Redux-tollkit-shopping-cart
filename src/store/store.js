import { configureStore } from "@reduxjs/toolkit";

import cartreducer from './cartSlice'
import productsreducer from './productsSlice'
const store=configureStore(
    {
        reducer:{
            cart:cartreducer,
            products:productsreducer

        }
    }
)

export default store;