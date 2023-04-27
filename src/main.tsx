import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./components/context/SearchContext";
import App from "./App";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
