import "./index.css";
import { useEffect, useState } from "react";


export default function Tarefas({ Responsavel }) {
  const [Listatarefas, setListatarefa] = useState([""]);
  const [NovaTarefa, setNovaTarefa] = useState("");

  function inputNovaTarefa(valorrecebido) {
    console.log(valorrecebido.target.value);
    setNovaTarefa(valorrecebido.target.value);
  }

  function adicionarListaTarefa() {
    setListatarefa([...Listatarefas, NovaTarefa]);
  }

  return (
    <div className="Listatarefas">
      <h1>{Responsavel}</h1>
      <input type="text" onChange={inputNovaTarefa} />
      <button onClick={adicionarListaTarefa}>Adicionar</button>

      <h1>{Listatarefas}</h1>
    </div>
  );
}
