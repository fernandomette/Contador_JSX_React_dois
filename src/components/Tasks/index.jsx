import React from "react";
import PropTask from "./PropTask"

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (<PropTask task={task} />))}
    </>
  )
}

export default Tasks;

