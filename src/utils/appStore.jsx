import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.jsx";
import movieReducer from "./Slices/MovieSlice.jsx"
import gptReducer from "./Slices/gptSlice.jsx"
import configReducer from "./Slices/configSlice.jsx"

const appStore = configureStore(
    {
        reducer : {
          user : userReducer,
          movies : movieReducer,
          GptSearch : gptReducer,
          config : configReducer,
        } 
    }
)

export default appStore