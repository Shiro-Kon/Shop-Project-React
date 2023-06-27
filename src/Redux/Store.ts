import { configureStore } from "@reduxjs/toolkit";
import { likeReducer } from "./LikeReducer";


export const store = configureStore ({
    ///// reducer - це функція яка буде знати на що треба буде міняти наш state
    reducer: {
        productsLikeState: likeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch