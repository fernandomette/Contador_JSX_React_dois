import "./index.css";
import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [teste, setTeste] = useState(5);

  function somar() {
    setContador(contador + teste);
  }

  function subtarir() {
    setTeste(teste - contador);
  }

  return (
    <div className="wrapper">
      <div className="contador">
        {contador}
        <div>
          <button onClick={somar}>Mais</button>
          <button onClick={subtarir}>Menos</button>
        </div>
      </div>
    </div>
  );
}
