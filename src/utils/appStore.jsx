import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.jsx";

const appStore = configureStore(
    {
        reducer : {
          users : userReducer
        }
    }
)

export default appStore