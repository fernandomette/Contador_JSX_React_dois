import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import "./TaskDetails.css";
import Button from "./Tasks/button";

const TaskDetails = () =>{
    const params = useParams();
    const history = useHistory();

    const handlebackButton = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handlebackButton}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h1>{params.taskTitle }</h1>
                <p>
                    Simplesmente os Detalhes
                    Temos que modificar, para funcionar direito
                </p>
            </div>
        </>
    );
}

export default TaskDetails;