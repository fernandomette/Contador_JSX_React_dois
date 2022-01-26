import React from "react";
import Tasks from ".";
import "./PropTask.css";

const PropTask = ({task, handleTaskClick, handleTaskDeletion}) => {

    return (
        <div 
            className="PropTask-container" 
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</div>
            
            <div className="buttons-container">
				<button
					className="remove-task-button"
					onClick={() => handleTaskDeletion(task.id)}
				>
				
				</button>
				<button
					className="see-task-details-button"
					onClick={handleTaskDetailsClick}
				>
				
				</button>
			</div>
        </div>
        
    );
}

export default PropTask;