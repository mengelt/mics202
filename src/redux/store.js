import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./slices/counter";

export const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
    },
  },
  composeWithDevTools()
);
