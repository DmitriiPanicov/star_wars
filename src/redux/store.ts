import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "./slices/fetchData";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>