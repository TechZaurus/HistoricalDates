import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "../features/dataSlice"
import circleControlReducer from "../features/circleControlSlice"
import pagerControlReducer from "../features/pagerControlSlice"
import counterControlReducer from "../features/counterControlSlice"
import swiperControlReducer from "../features/swiperControlSlice"
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    historicalDates: dataReducer,
    circleControl: circleControlReducer,
    pagerControl: pagerControlReducer,
    counterControl: counterControlReducer,
    swiperControl: swiperControlReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}) 

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();