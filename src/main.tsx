import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTopOnRefresh from "./components/ScrollToTop.tsx";

// const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    //  <BrowserRouter basename={basename}> 
    <BrowserRouter>
    <ScrollToTopOnRefresh />
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
