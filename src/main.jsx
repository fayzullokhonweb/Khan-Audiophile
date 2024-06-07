import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Toaster } from "react-hot-toast";
import GlobalContextProvider from "./context/globalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </GlobalContextProvider>
);
