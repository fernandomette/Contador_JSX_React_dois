import "./index.css";
import React from "react";
import { useEffect, useState } from "react";


const Tarefa = () => {
  const [addNewtask, setaddNewtask] = useState("Teste1");
    
  
  return (
    <div className="container"> 
      <h1>Minhas Tarefas</h1>
      <h1>{addNewtask}</h1>
      <button onClick={() => setaddNewtask("Teste2")}>Mudar Tarefa</button>
    </div>
  )
}

export default Tarefa;

