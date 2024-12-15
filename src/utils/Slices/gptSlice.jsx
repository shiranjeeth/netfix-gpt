import {createSlice} from "@reduxjs/toolkit";

const  gptSlice = createSlice({
    name : "gptSlice",
    initialState : {
       showGPTSearch : false
    },
    reducers : {
     toggleGptsearchView : (state)=>{
        state.showGPTSearch = !state.showGPTSearch;
    }
}

})

export const {toggleGptsearchView} = gptSlice.actions;

export default gptSlice.reducer