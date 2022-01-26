import "./index.css";
import React from "react";
import Tasks from "../components/Tasks";
import { useState } from "react";
import AddTask from "../components/Tasks/AddTask";


const Menu = () => {
  const [tasks, settasks] = useState([
    {
      id: '1',
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: '1',
      title: "Estudar Programação",
      completed: false,
    },
  ]);
    
  
  return (
    <div className="container"> 

      <h1>Minhas Tarefas</h1>
      <AddTask />
      <Tasks tasks={tasks}/>

    </div>
  )
}

export default Menu;

