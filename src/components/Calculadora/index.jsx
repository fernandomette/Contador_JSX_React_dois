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
    <div className="contador">
      {contador}
      <div>
          <button onClick={subtarir}>Menos</button>
          <h1>Sistema de Calculadora</h1>
          
          <input type="text" id="caixanumerodigitado" name="caixanumerodigitado" size="1" value="0">
          <br> </br>

          <button onClick={somar}>Somar (+)</button>
          <button onClick={diminuir}>Diminuir (-)</button>
          <button onClick={multiplicar}>Multiplicar (x)</button>
          <button onClick={dividir}>Dividir (/)</button>

          <h3>Resultado:</h3>
          <p id="resultado">0</p>

          <button onclick="zerarresultado()">Zerar Resultado</button>
          <br> </br>

        <div id="listahistorico"></div>
      </div>
    </div>
  );
}
