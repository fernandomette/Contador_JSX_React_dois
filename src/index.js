import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Contador from "./components/contador";
import Contador from "./components/Calculadora";

ReactDOM.render(
  <div>
    <Contador />
    <Calculadora />
  </div>,
  document.getElementById("root")
);
