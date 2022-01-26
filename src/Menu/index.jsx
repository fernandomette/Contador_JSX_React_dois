import "./index.css";
import React from "react";
import { useState } from "react";
import Tasks from "../components/Tasks";
import PropTask from "../components/Tasks/PropTask"

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

  /** 
  const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};

  */

  const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: Math.random(10),
				completed: false,
			},
		];

		settasks(newTasks);
	};

  /**
	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};
      
  */
  return (
    <div className="container"> 

      <h1>Minhas Tarefas</h1>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>

    </div>
  )
}

export default Menu;

