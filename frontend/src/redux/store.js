import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./slices/jobsSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsSlice,
    }
});