import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contador from "./components/contador";
import Tarefas from "./components/tarefas";
import Calculadora from "./components/Calculadora";

ReactDOM.render(
  <div>
    <Calculadora />
    <Tarefas Responsavel="Teste1" />
  </div>,
  document.getElementById("root")
);
