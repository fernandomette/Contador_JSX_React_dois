import React from "react";
import Tasks from ".";
import "./PropTask.css";
import { CgClose, CgInfo } from "react-icons/cg";
import {useHistory} from 'react-router-dom'

const PropTask = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDetail = () => {
        history.push(`/${task.title}`)
    }

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
                    <CgClose />
				</button>
                <button 
                    className="see-task-button" 
                    onClick={handleTaskDetail}
                >
                    <CgInfo />
				</button>

			</div>
        </div>    
    );
}

export default PropTask;