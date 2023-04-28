import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./components/context/FavoritesContext";
import { SearchContextProvider } from "./components/context/SearchContext";
import App from "./App";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <FavoritesContextProvider>
      <React.StrictMode>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </React.StrictMode>
    </FavoritesContextProvider>
  </BrowserRouter>
);
