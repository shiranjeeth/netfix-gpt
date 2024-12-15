import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.jsx";
import movieReducer from "./Slices/MovieSlice.jsx"
import gptReducer from "./Slices/gptSlice.jsx"

const appStore = configureStore(
    {
        reducer : {
          user : userReducer,
          movies : movieReducer,
          GptSearch : gptReducer,
        } 
    }
)

export default appStore