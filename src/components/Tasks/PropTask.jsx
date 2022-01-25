import React from "react";
import "./PropTask.css";

const PropTask = ({task}) => {

    return (
        <div className="PropTask-container">
            {task.title}
        </div>
    );
}

export default PropTask;