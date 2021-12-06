import "./index.css";
import { useState } from "react";

export default function Calculadora() {
  const [resultado, setResultado] = useState(0);

  var listaulli = [""];

  var listadehistorico = [(listaulli)];

  function CriaUlLI(array) {
    var listhistoricoul = document.createElement("ul");

    var item = document.createElement("li");

    for (var i = 0; i < array.length; i++) {
      item.appendChild(document.createTextNode(array[i]));
      listhistoricoul.appendChild(item);
    }

    // Retorne a lista construída:
    return listhistoricoul;
  }

  function somar() {
    var numeroDigitado = 0; //Valor da caixa digitado

    var valorResultadoanterior = resultado;

    setResultado(resultado + numeroDigitado);

    listaulli.splice(0, listaulli.length);

    listaulli.push(valorResultadoanterior, " + ", numeroDigitado, " = ", resultado);

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function diminuir() {
    var numeroDigitado = 0;

    var valorResultadoanterior = resultado;

    setResultado(resultado - numeroDigitado);

    listaulli.splice(0, listaulli.length);

    listaulli.push(valorResultadoanterior, " - ", numeroDigitado, " = ", resultado);

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function multiplicar() {
    var numeroDigitado = 0;

    var valorResultadoanterior = resultado;

    setResultado(resultado * numeroDigitado);

    listaulli.splice(0, listaulli.length);

    listaulli.push(valorResultadoanterior, " x ", numeroDigitado, " = ", resultado);

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function dividir() {
    var numeroDigitado = 0;

    var valorResultadoanterior = resultado;

    if (numeroDigitado == 0) {
      numeroDigitado = 0;

      setResultado(numeroDigitado);

      listaulli.splice(0, listaulli.length);

      listaulli.push(valorResultadoanterior, " / ", numeroDigitado, " = ", resultado);

      document
        .getElementById("listahistorico")
        .appendChild(CriaUlLI(listadehistorico[0]));
    } else {
      setResultado(resultado / numeroDigitado);

      listaulli.splice(0, listaulli.length);

      listaulli.push(valorResultadoanterior, " / ", numeroDigitado, " = ", resultado);

      document
        .getElementById("listahistorico")
        .appendChild(CriaUlLI(listadehistorico[0]));
    }
  }

  function zerarresultado() {
    setResultado(0);
  }
  
  /**
  
    <div>
      <button onClick={somar}>Somar(+)</button>
      <button onClick={diminuir}>Diminuir(-)</button>
      <button onClick={multiplicar}>Multiplicar(x)</button>
      <button onClick={dividir}>Dividir(/)</button>

      <h3>{resultado}</h3>

      <button onClick={zerarresultado}>Zerar Resultado</button>
      <br> </br>

      <div id="listahistorico"></div>
    </div>
  </div>
*/

  return (
    <div className="calculadora">
      <h3>{resultado}</h3>
      <button onClick={somar}>Somar (+)</button>
      <button onClick={diminuir}>Diminuir (-)</button>
      <button onClick={multiplicar}>Multiplicar (x)</button>
      <button onClick={dividir}>Dividir (/)</button>
      <button onClick={zerarresultado}>Zerar Resultado</button>
      <div id="listahistorico"></div>
    </div>

  );
}
