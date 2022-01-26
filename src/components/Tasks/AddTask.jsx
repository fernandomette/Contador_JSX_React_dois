import React from "react";
import { useState } from "react";

import "./AddTask.css";
import "./button";
import Button from "./button";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, SetInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }; 

    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />
            ;
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default AddTask;