import { configureStore } from "@reduxjs/toolkit";
import postFilterReducer from './slice'

export default configureStore({
    reducer: {
        postFilter: postFilterReducer
    }
})