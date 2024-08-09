import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppName from "./Components/AppName.jsx"
import AddTODO from "./Components/AddTODO.jsx";
import Tasks from "./Components/Tasks.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppName />
    <AddTODO />
    <Tasks />
    <Tasks />
    <App />
  </React.StrictMode>
);
