import { createSlice } from "@reduxjs/toolkit";
import initState from "./initState";


const levelSlice = createSlice({
    name: 'levelsHandler',
    initialState: initState,
    reducers: {
        setCurrentLevel(state, action) {
            state.currentLevel = action.payload 
        },

        incrementLevel(state, action){
             state.currentLevel++ 
        },
    
        decrementLevel(state, action){
            state.currentLevel--
        },

        setStyles(state, action) {
          state.userAnswer = action.payload
        }
        
    }
})
export const levelActions = levelSlice.actions;
export default levelSlice;