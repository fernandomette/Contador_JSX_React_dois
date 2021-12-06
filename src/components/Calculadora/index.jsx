import "./index.css";
import { useState } from "react";

export default function Contador() {
  const [resultado, setResultado] = useState(0);

  var listadehistorico = [(listaulli = [])];

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

    listaulli.splice(0, qualquer.length);

    listaulli.push(valoranterior, " + ", numeroDigitado, " = ", resultado);

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function diminuir() {
    var numeroDigitado = 0;

    var valorResultadoanterior = resultado;

    setResultado(resultado - numeroDigitado);

    listaulli.splice(0, qualquer.length);

    listaulli.push(valoranterior, " - ", numeroDigitado, " = ", resultado);

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function multiplicar() {
    var numeroDigitado = 0;

    var valorResultadoanterior = resultado;

    setResultado(resultado * numeroDigitado);

    listaulli.splice(0, qualquer.length);

    listaulli.push(valoranterior, " x ", numeroDigitado, " = ", resultado);

    document
      .getElementById("listahistorico")
      .appendChild(CriaUlLI(listadehistorico[0]));
  }

  function dividir() {
    var numeroDigitado = 0;

    if (numeroDigitado == 0) {
      numeroDigitado = 0;

      setResultado(numeroDigitado);

      listaulli.splice(0, qualquer.length);

      listaulli.push(valoranterior, " / ", numeroDigitado, " = ", resultado);

      document
        .getElementById("listahistorico")
        .appendChild(CriaUlLI(listadehistorico[0]));
    } else {
      setResultado(resultado / numeroDigitado);

      listaulli.splice(0, qualquer.length);

      listaulli.push(valoranterior, " / ", numeroDigitado, " = ", resultado);

      document
        .getElementById("listahistorico")
        .appendChild(CriaUlLI(listadehistorico[0]));
    }
  }

  function zerarresultado() {
    setResultado(0);
  }

  return (
    <div className="calculadora">
      <div>
        <button onClick={somar}>Somar (+)</button>
        <button onClick={diminuir}>Diminuir (-)</button>
        <button onClick={multiplicar}>Multiplicar (x)</button>
        <button onClick={dividir}>Dividir (/)</button>

        <p>{Resultado}</p>

        <button onClick={zerarresultado}>Zerar Resultado</button>
        <br> </br>

        <div id="listahistorico"></div>
      </div>
    </div>
  );
}
