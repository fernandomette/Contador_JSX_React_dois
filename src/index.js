import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Tarefas from "./components/tarefas";
import AddTarefas from "./components/AddTarefas";


ReactDOM.render(
  <div>
    <AddTarefas />
    <Tarefas />
  </div>,
  document.getElementById("root")
);
