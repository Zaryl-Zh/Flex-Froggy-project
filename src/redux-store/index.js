import { configureStore } from "@reduxjs/toolkit";
import levelSlice from "./level-slice";



const store = configureStore ({
    reducer: {
        level: levelSlice.reducer
    }
})

export default store; 