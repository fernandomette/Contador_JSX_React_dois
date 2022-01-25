import "./index.css";
import React from "react";
import Tasks from "../components/Tasks";
import { useState } from "react";


const Menu = () => {
  const [tasks, settasks] = useState([
    {
      id: '1',
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: '2',
      title: "Ser Fodão",
      completed: true,
    }
  ]);
    
  
  return (
    <div className="container"> 

      <h1>Minhas Tarefas</h1>
      <Tasks tasks={tasks}/>

    </div>
  )
}

export default Menu;

