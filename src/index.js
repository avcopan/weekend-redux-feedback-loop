import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import surveySlice from "./state/surveySlice";

const store = configureStore({
  reducer: {
    survey: surveySlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
