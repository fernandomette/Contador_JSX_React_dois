import "./index.css";
import { useEffect, useState } from "react";
import React from 'react';


export default function Tarefas({ Responsavel }) {
  const [ListTask, setListTask] = useState([""]);
  const [TextFild, setTextFild] = useState("");

  class HelloForm extends React.Component {
  state = {value: ''}

  handleTextChange(e) {
    this.setState({
      texto: e.target.value
    });
  }

  handleClick() {
    alert(this.state.texto);
  }

  }

  function inputNewTask(value) {
   setTextFild(value.target.value);
  }

  function addListTask() {
   setListTask([...ListTask, TextFild]);
   console.log(TextFild);
  }

  return() (
    <div className="ListTask">    
      <h1>Resposavel: {Responsavel}</h1>
      Digite o texto: <input type="text" onChange={this.handleTextChange.bind(this)}></input>
      <div>{this.state.texto}</div>
      <button onClick={this.handleClick.bind(this)}>Exibir alerta</button>
            
      <h1>{ListTask}</h1>

    </div>
  );
}
