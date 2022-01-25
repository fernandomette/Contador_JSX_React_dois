import React from "react";

const PropTask = ({task}) => {

    return (
        <div className="container"> 
            <h1>{task.id}</h1>
            <h1>{task.title}</h1>
            <h1>{task.completed}</h1>
        </div>
    );
}

export default PropTask;