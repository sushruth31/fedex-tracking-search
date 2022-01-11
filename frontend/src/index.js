import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./firebase";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./CSS/navbar.css";
import "./CSS/search.css";
import "./CSS/login.css";
import "./CSS/gen.css";
import { DataStoreProvider } from "./datastore";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <DataStoreProvider>
          <App />
        </DataStoreProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
