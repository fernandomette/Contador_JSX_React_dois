import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TaskDetails from "../components/TaksDetails";
import "./index.css";
import Tasks from "../components/Tasks";
import Header from "../components/header";
import { v4 as uuidv4 } from "uuid";

import AddTask from "../components/Tasks/AddTask";

const Menu = () => {
  
  const [tasks, settasks] = useState([
    {
      id: '1',
      title: "Estudar Programação",
      completed: true,
    },
    {
      id: '2',
      title: "Estudar React",
      completed: false,
    },
    {
      id: '3',
      title: "Treinar com a Towty",
      completed: false,
    },
    {
      id: '4',
      title: "Estudar Nodejs",
      completed: false,
    },
    {
      id: '5',
      title: "Estudar MariadDB",
      completed: false,
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
    <Router> 
      <div className="container"> 
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        )}
        />
        
        <Route path="/:taskTitle" exact component={TaskDetails} />

      </div>
    </Router>
  );
};

export default Menu;

