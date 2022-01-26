import React from "react";
import PropTask from "./PropTask"

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
  return (
    <>
      {tasks.map((task) => (<PropTask task={task} handleTaskClick={handleTaskClick, handleTaskDeletion}/>))}
    </>
  )
}

export default Tasks;

