import "./index.css";
import { useEffect, useState } from "react";
//import Tarefas from "./components/tarefas";

export default function AddTarefas() {
  const [Responsavel, setResponsavel] = useState("");

  function inputNovaTarefa(valorrecebido) {
    setResponsavel(valorrecebido.target.value);
  }

  function adicionarListaTarefa() {
    //<Tarefas Responsavel="Teste1" />
  }

  return (
    <div className="Listatarefas">

      <h1>Adicionar Uma Lista Com Responsavel:</h1>
      <input type="text" onChange={inputNovaTarefa} />
      <button onClick={adicionarListaTarefa}>Adicionar</button>

    </div>
  );
}
