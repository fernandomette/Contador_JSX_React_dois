import React from "react";
import { useState } from "react";

import "./index.css";
import Tasks from "../components/Tasks";
import { v4 as uuidv4 } from "uuid";

import AddTask from "../components/Tasks/AddTask";

const Menu = () => {
  
  const [tasks, settasks] = useState([
    {
      id: '1',
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: '2',
      title: "Estudar Programação",
      completed: true,
    },
  ]);


  const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		settasks(newTasks);
	};

  const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		settasks(newTasks);
	};

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		settasks(newTasks);
	};
      
  return (
    <div className="container"> 

      <h1>Minhas Tarefas</h1>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick, handleTaskDeletion}/>

    </div>
  )
}

export default Menu;

