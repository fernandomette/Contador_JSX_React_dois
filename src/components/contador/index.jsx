import "./index.css";
import { useEffect, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(()=>{
    console.log("entrou")
  },[contador])


  function somar() {
    setContador(contador + 1);
  }

  function subtarir() {
    setContador(contador - 1);
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
