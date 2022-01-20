import "./index.css";
import { useEffect, useState } from "react";


export default function Tarefas({ Responsavel }) {
  const [ListTask, setListTask] = useState([""]);
  const [TextFild, setTextFild] = useState("");

  function inputNewTask(value) {
   console.log(value.target.value);
   setTextFild(value.target.value);
  }

  function addListTask() {
   setListTask([...ListTask, TextFild]);
   setTextFild("");
   console.log(TextFild);
  }

  return (
    <div className="ListTask">
      <h1>{Responsavel}</h1>
      <input Value={TextFild} type="text" onChange={inputNewTask} />
      <button onClick={addListTask}>Adicionar</button>

      <h1>{ListTask}</h1>
    </div>
  );
}
