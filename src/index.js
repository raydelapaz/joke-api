import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./App";
import jokeReducer from "./jokeSlice";

const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
  middleware: [thunkMiddleware],
});

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
