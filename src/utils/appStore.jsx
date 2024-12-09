import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.jsx";
import movieReducer from "./Slices/MovieSlice.jsx"

const appStore = configureStore(
    {
        reducer : {
          user : userReducer,
          movies : movieReducer
        }
    }
)

export default appStore